import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";
import config from "../config/index.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(db.User);
  }

  async find(email) {
    try {
      return await this.model.findOne({ where: { email } });
    } catch (error) {
      config.logger.error("Something went wrong in the User Repo: find");
      throw error;
    }
  }
}

export default UserRepository;
