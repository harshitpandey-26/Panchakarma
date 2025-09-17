import { StatusCodes } from "http-status-codes";
import { clinicService } from "../services/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/common/success-response.js";
import config from "../config/index.js";

export const getAllClinic = asyncHandler(async (req, res) => {
  const clinic = await clinicService.getAllClinic();

  config.logger.info("All Clinic fetched successfully");

  return successResponse(
    res,
    StatusCodes.OK,
    "ALL clinics Fetched successfully",
    clinic
  );
});

export const getClinicByIdPublic = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const clinic = await clinicService.getClinicByIdPublic(id);

  config.logger.info(`Clinic with id:${id} fetched successfully for public`);

  return successResponse(
    res,
    StatusCodes.OK,
    `Clinic with id:${id} fetched successfully for public`,
    clinic
  );
});


// ------------:ALL ARE PROTECT ROUTE :------
export const getClinicById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const clinic = await clinicService.getClinicById(id, req.user.id);

  config.logger.info("Clinic fetched successfully with id: ", id);

  return successResponse(
    res,
    StatusCodes.OK,
    "Clinic Fetched successfully",
    clinic
  );
});

export const updateClinic = asyncHandler(async (req, res) => {
  const {
    clinic_name,
    address,
    city,
    state,
    zip_code,
    phone,
    license_number,
    established_year,
  } = req.body;

  const { id } = req.params;

  const clinicData = {
    clinic_name,
    address,
    city,
    state,
    zip_code,
    phone,
    license_number,
    established_year,
  };

  const clinic = await clinicService.updateClinic(id, clinicData, req.user.id);

  config.logger.info("Clinic Updated successfully");

  return successResponse(
    res,
    StatusCodes.OK,
    "Clinic updated successfully",
    clinic
  );
});

export const deleteClinic = asyncHandler(async (req, res) => {
    console.log("inside delete clinic controller");
  const { id } = req.params;
  await clinicService.deleteClinic(id, req.user.id);
  return successResponse(res, StatusCodes.OK, "Clinic deleted successfully");
});
