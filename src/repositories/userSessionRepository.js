import config from "../config/index.js";
import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

class UserSessionRepository extends CrudRepository {
  constructor() {
    super(db.User_Session);
  }

  async findBySessionId(session_id) {
    try {
      return await this.model.findOne({ where: { session_id } });
    } catch (error) {
      config.logger.error(
        "Something went wrong in the User Session repo: findBySessinId"
      );
      throw error;
    }
  }

  async updateBySessionId(session_id, data) {
    try {
      return await this.model.update(data, { where: { session_id } });
    } catch (error) {
      config.logger.error(
        "Something went wrong in the User Session Repo: updateBySessionId"
      );
      throw error;
    }
  }
}

export default UserSessionRepository;
