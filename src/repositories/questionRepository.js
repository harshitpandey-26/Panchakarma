import config from "../config/index.js";
import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

class QuestionRepository extends CrudRepository {
  constructor() {
    super(db.Question);
  }

  async findAllQuestionsWithOptions() {
    console.log("inside findAllQuestionsWithOptions repo");
    try {
      return await db.Question.findAll({
        include: [
          {
            model: db.Question_Option,
            as: "options",
            attributes: ["id", "option_text"],
          },
        ],
        order: [["id", "ASC"]],
      });
    } catch (error) {
      config.logger.error("Something went wrong in the Question Repo: findAllQuestionsWithOptions");
      throw error;
    }
  }

  async findQuestionById(id) {
    console.log("inside findQuestionById repo");
    try {
      return await db.Question.findByPk(id, {
        include: [
          {
            model: db.Question_Option,
            as: "options",
          },
        ],
      });
    } catch (error) {
      config.logger.error("Something went wrong in the Question Repo: findQuestionById");
      throw error;
    }
  }
}

export default QuestionRepository;
