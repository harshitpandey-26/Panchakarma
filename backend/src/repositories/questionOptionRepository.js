import config from "../config/index.js";
import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

class QuestionOptionRepository extends CrudRepository {
  constructor() {
    super(db.Question_Option);
  }

  async findOptionByIdAndQuestionId(option_id, question_id) {
    console.log("inside findOptionByIdAndQuestionId repo ");
    try {
      return await db.Question_Option.findOne({
        where: { id: option_id, question_id },
      });
    } catch (error) {
      config.logger.error("Something went wrong in the QuestionOption Repo: findOptionByIdAndQuestionId");
      throw error;
    }
  }

  async findOptionsByQuestionId(question_id) {
    console.log("inside findOptionsByQuestionId repo");
    try {
        return await db.Question_Option.findAll({
          where: { question_id },
        });
    } catch (error) {
      config.logger.error("Something went wrong in the QuestionOption Repo: findOptionsByQuestionId");
      throw error;
    }
  }
}

export default QuestionOptionRepository;
