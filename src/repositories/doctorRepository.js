import config from "../config/index.js";
import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

class DoctorRepository extends CrudRepository {
  constructor() {
    super(db.Doctor_Profile);
  }

  async findByInvitationToken(token) {
    try {
      return await this.model.findOne({ where: { invitation_token: token } });
    } catch (error) {
      config.logger.error(
        "Something went wrong in Doctor repo: findByInvitationToken"
      );
      throw error;
    }
  }

  async getDoctorsByClinic(clinic_id){
    try {
      return await this.model.findOne({where: {clinic_id}});
    } catch (error) {
      config.logger.error(
        "Something went wrong in Doctor repo: findByInvitationToken"
      );
      throw error;
    }
  }

}

export default DoctorRepository;
