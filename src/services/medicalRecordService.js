import repository from "../repositories/index.js";
import { cloudinary } from "../config/cloudinaryConfig.js";
import fs from 'fs';
import path from 'path';
import { AppError, NotFoundError,DatabaseError } from "../utils/error/app-error.js";

const medicalRecordRepo = new repository.MedicalRecordRepository();

// Upload a medical record
export const uploadMedicalRecord = async (patientData) => {
  let cloudinaryResult = null;
  
  try {
    const { file, ...recordDataWithoutFile } = patientData;
    
    // Upload to Cloudinary
    cloudinaryResult = await cloudinary.uploader.upload(file.path, {
      folder: 'medical_records',
      resource_type: 'auto',
      public_id: `patient_${patientData.patient_id}_${Date.now()}`
    });
    
    // Create record in database with file_path from Cloudinary
    const recordData = {
      ...recordDataWithoutFile,
      file_path: cloudinaryResult.secure_url, // Cloudinary URL
    //   cloudinary_public_id: cloudinaryResult.public_id, // Store public_id for future deletion
    //   file_name: file.originalname,
    //   file_size: file.size,
    //   mime_type: file.mimetype
    };

    const medicalRecord = await medicalRecordRepo.createMedicalRecord(recordData);
    
    // Delete the temporary file
    fs.unlinkSync(file.path);
    
    return medicalRecord;
  } catch (error) {
    // If database operation fails, delete the uploaded file from Cloudinary
    if (cloudinaryResult && cloudinaryResult.public_id) {
      await cloudinary.uploader.destroy(cloudinaryResult.public_id);
    }
    
    // Delete the temporary file if it exists
    if (patientData.file && patientData.file.path) {
      try {
        fs.unlinkSync(patientData.file.path);
      } catch (unlinkError) {
        console.error('Error deleting temporary file:', unlinkError);
      }
    }
    
    throw new AppError(`Failed to upload medical record: ${error.message}`,400,"UPLOAD FAILED","warn");
  }
};

// Get all medical records for a patient
export const getMedicalRecords = async (patient_id) => {
  try {
    const records = await medicalRecordRepo.findRecordsByPatientId(patient_id);
    return records;
  } catch (error) {
    throw new DatabaseError(error);
  }
};

// Delete a medical record
export const deleteMedicalRecord = async (id) => {
  try {
    // First get the record to extract Cloudinary public_id
    const record = await medicalRecordRepo.findRecordById(id);

    if (!record) {
      throw new NotFoundError("Medical record not found");
    }

    // Need to create cloudinary_public_id columninside medical record then implement this also.
    // // Delete from Cloudinary using the stored public_id
    // if (record.cloudinary_public_id) {
    //   await cloudinary.uploader.destroy(record.cloudinary_public_id);
    // }

    // Delete from database
    const deleted = await medicalRecordRepo.deleteMedicalRecord(id);
    return deleted;
  } catch (error) {
    throw new DatabaseError(error);
  }
};