import config from "../config/index.js";
import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

const {Medical_Record} = db;

class MedicalRecordRepository extends CrudRepository {
  constructor() {
    super(Medical_Record);
  }


  async createMedicalRecord(recordData) {
    try {
      const medicalRecord = await Medical_Record.create(recordData);
      return medicalRecord;
    } catch (error) {
      config.logger.error("Something went wrong in the MedicalRecord Repo: createMedicalRecord");
      throw error;
    }
  }

  // Find medical records by patient ID
  async findRecordsByPatientId(patient_id) {
    try {
      const records = await Medical_Record.findAll({
        where: { patient_id },
        order: [["createdAt", "DESC"]],
      });
      return records;
    } catch (error) {
      config.logger.error("Something went wrong in the MedicalRecord Repo: findRecordsByPatientId");
      throw error;
    }
  }

  // Find a specific medical record by ID
  async findRecordById(id) {
    try {
      const record = await Medical_Record.findByPk(id);
      return record;
    } catch (error) {
      config.logger.error("Something went wrong in the MedicalRecord Repo: findRecordId");
      throw error;
    }
  }

  // Update a medical record
  async updateMedicalRecord(id, updates) {
    try {
      const [affectedCount] = await Medical_Record.update(updates, {
        where: { id },
      });
      return affectedCount > 0;
    } catch (error) {
      config.logger.error("Something went wrong in the MedicalRecord Repo: updateMedicalRecord");
      throw error;
    }
  }

  // Delete a medical record
  async deleteMedicalRecord(id) {
    try {
      const affectedCount = await Medical_Record.destroy({
        where: { id },
      });
      return affectedCount > 0;
    } catch (error) {
     config.logger.error("Something went wrong in the MedicalRecord Repo: deleteMedicalRecord");
      throw error;
    }
  }
}

export default MedicalRecordRepository;
