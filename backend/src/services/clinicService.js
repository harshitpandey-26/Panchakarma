import { DatabaseError, NotFoundError } from "../utils/error/app-error.js";
import repository from "../repositories/index.js";

const clinicRepo = new repository.ClinicRepository();

// Public methods - no authentication required
export const getClinicByIdPublic = async (id) => {
  try {
    const clinic = await clinicRepo.get(id);
    if (!clinic) {
      throw new Error("Clinic not found");
    }
    return clinic;
  } catch (error) {
    throw new DatabaseError(error);
  }
};

// services/clinicService.js
// Add this method to your clinicService

export const getClinicByUserId = async (userId) => {
  try {
    const clinic = await clinicRepo.getClinicByUserId(userId);
    return clinic;
  } catch (error) {
    throw new DatabaseError(error);
  }
};

export const getAllClinic = async () => {
  try {
    const allClinic = await clinicRepo.getAll();
    return allClinic;
  } catch (error) {
    throw new DatabaseError(error);
  }
};

export const getClinicById = async (id, user_id) => {
  try {
    const clinic = await clinicRepo.getClinicByIdAndUserId(id, user_id);
    if (!clinic) {
      throw new NotFoundError("Clinic", id);
    }
    return clinic;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throw new DatabaseError(error);
  }
};

export const updateClinic = async (id, data, user_id) => {
  try {
    const existsClinic = await clinicRepo.getClinicByIdAndUserId(id, user_id);
    if (!existsClinic) {
      throw new NotFoundError("Clinic", id);
    }
    await clinicRepo.update(id, data);
    const clinic = await clinicRepo.getClinicByIdAndUserId(id,user_id);
    return clinic;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throw new DatabaseError(error);
  }
};

export const deleteClinic = async (id, user_id) => {
  console.log("inside delete clinic service");
  try {
    const existsClinic = await clinicRepo.getClinicByIdAndUserId(id, user_id);
    if (!existsClinic) {
      throw new NotFoundError("Clinic", id);
    }

    const clinic = await clinicRepo.destroy(id);
    return clinic;
  } catch (error) {
    // if (error instanceof AppError) {
    //   throw error;
    // }
    throw new DatabaseError(error);
  }
};
