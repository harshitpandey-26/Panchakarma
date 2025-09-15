import { StatusCodes } from "http-status-codes";
import config from "../config/index.js";
import { medicalRecordService } from "../services/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/common/success-response.js";

// Upload medical record
export const uploadRecord = asyncHandler(async (req, res, next) => {
  console.log("inside upload record controller");
  try {
    const { title, description, record_type } = req.body;
    const patient_id = req.user.id;
    const file = req.file;

    if (!file) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const patientData = {
      patient_id,
      title,
      description,
      record_type,
      file, // Pass the file object directly
    };

    const medicalRecord = await medicalRecordService.uploadMedicalRecord(patientData);

    config.logger.info("Medical record uploaded successfully", medicalRecord);

    return successResponse(
      res,
      StatusCodes.CREATED,
      "Medical record uploaded successfully",
      medicalRecord
    );
  } catch (error) {
    next(error);
  }
});

// Get all medical records for a patient
export const getRecords = asyncHandler(async (req, res, next) => {
  console.log("inside get record controller");

  try {
    const patient_id = req.user.id;
    const records = await medicalRecordService.getMedicalRecords(patient_id);

    config.logger.info(
      "Retrieving all medical record of patient: ",
      patient_id
    );

    return successResponse(
      res,
      StatusCodes.OK,
      "All medical records for patient",
      records
    );
  } catch (error) {
    next(error);
  }
});

// Delete a medical record
export const deleteRecord = asyncHandler(async (req, res, next) => {
  console.log("inside delete record controller");

  try {
    const { id } = req.params;
    const deleted = await medicalRecordService.deleteMedicalRecord(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Medical record not found",
      });
    }

    return successResponse(
      res,
      StatusCodes.OK,
      "Medical record deleted successfully",
      deleted
    );
  } catch (error) {
    next(error);
  }
});
