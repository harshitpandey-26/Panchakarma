import config from "../config/index.js";
import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

class ClinicRepository extends CrudRepository {
  constructor() {
    super(db.Clinic_Profile);
  }

  async getClinicByUserId(user_id){
    console.log("inside getclinicbyuserid repo");
    try {
      return await this.model.findOne({
        where: { user_id },
      });
    } catch (error) {
      config.logger.error("Something went wrong in the Clinic Repo: getClinicByUserId");
      throw error;
    }
  }

  async getClinicByIdAndUserId(id, user_id) {
    console.log("inside getclinicbyuserid repo");
    try {
      return await this.model.findOne({
        where: { id, user_id },
      });
    } catch (error) {
      config.logger.error("Something went wrong in the Clinic Repo: getClinicByIdAndUserId");
      throw error;
    }
  }
}

export default ClinicRepository;
