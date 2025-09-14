import config from "../config/index.js";
import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

class UserAnswerRepository extends CrudRepository {
  constructor() {
    super(db.User_Answer);
  }

  async createUserAnswer(answerData) {
    console.log("inside createUserAnswer repo");
    try {
      return await db.User_Answer.create(answerData);
    } catch (error) {
      config.logger.error("Something went wrong in the UserAnswer Repo: createUserAnswer");
      throw error;
    }
  }

  async findAnswersBySessionId(session_id) {
    console.log("inside findAnswersBySessionId repo");
    try {
      return await db.User_Answer.findAll({
        where: { session_id },
        include: ["question", "selected_option"],
      });
    } catch (error) {
      config.logger.error("Something went wrong in the UserAnswer Repo: findAnswersBySessionId");
      throw error;
    }
  }

  async deleteAnswersBySessionId(session_id) {
    console.log("inside deleteAnswersBySessionId repo");
    try {
      return await db.User_Answer.destroy({ where: { session_id } });
    } catch (error) {
      config.logger.error("Something went wrong in the UserAnswer Repo: deleteAnswersBySessionId");
      throw error;
    }
  }
}

export default UserAnswerRepository;
