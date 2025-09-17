// controllers/doctorController.js
import { StatusCodes } from "http-status-codes";
import { doctorService, clinicService } from "../services/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/common/success-response.js";
import config from "../config/index.js";

export const createDoctor = asyncHandler(async (req, res) => {
  console.log("inside create doctor controller");
  const {
    name,
    email,
    password,
    specialization,
    qualifications,
    years_of_experience,
    license_number,
    bio,
  } = req.body;

  // Get the clinic profile ID associated with the user
  const clinicProfile = await clinicService.getClinicByUserId(req.user.id);
  
  if (!clinicProfile) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "Clinic profile not found for this user",
    });
  }

  const clinic_id = clinicProfile.id;

  const doctorData = {
    name,
    email,
    password,
    specialization,
    qualifications,
    years_of_experience,
    license_number,
    bio,
  };

  const doctor = await doctorService.createDoctorForClinic(
    doctorData,
    clinic_id
  );

  config.logger.info("Doctor created successfully and invitation sent");

  return successResponse(
    res,
    StatusCodes.CREATED,
    "Doctor created successfully and invitation sent",
    doctor
  );
});

export const acceptInvitation = asyncHandler(async (req, res) => {
  console.log("inside accept invitation controller");

  const { token } = req.params;
  const { email, password, name } = req.body;

  const userData = {
    email,
    password,
    name,
  };

  const doctor = await doctorService.acceptInvitation(token, userData);

  config.logger.info("Doctor invitation accepted and account created");

  return successResponse(
    res,
    StatusCodes.OK,
    "Account created successfully",
    doctor
  );
});

export const getClinicDoctors = asyncHandler(async (req, res) => {
  console.log("inside get clinic by doctors controller");

  // Get the clinic profile ID associated with the user
  const clinicProfile = await clinicService.getClinicByUserId(req.user.id);
  
  if (!clinicProfile) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "Clinic profile not found for this user",
    });
  }

  const clinic_id = clinicProfile.id;
  const doctors = await doctorService.getClinicDoctors(clinic_id);

  config.logger.info("Clinic doctors fetched successfully");

  return successResponse(
    res,
    StatusCodes.OK,
    "Clinic doctors fetched successfully",
    doctors
  );
});
