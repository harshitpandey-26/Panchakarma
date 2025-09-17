import config from "../config/index.js";

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log("inside crud repo");
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      config.logger.error("Something went wrong in the Crud Repo: create");
      throw error;
    }
  }

  async destroy(data) {
    console.log("inside destroy repo");
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      config.logger.error("Something went wrong in the Crud Repo: destroy");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      config.logger.error("Something went wrong in the Crud Repo: get");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      config.logger.error("Something went wrong in the Crud Repo: getAll");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      config.logger.error("Something went wrong in the Crud Repo: getAll");
      throw error;
    }
  }

  async getByUserId(user_id) {
    try {
      return await this.model.findOne({ where: { user_id } });
    } catch (error) {
      config.logger.error("Something went wrong in the Crud Repo: getByUserId");
      throw error;
    }
  }

  async updateByUserId(userId, data) {
    try {
      return await this.model.update(data, { where: { userId } });
    } catch (error) {
      config.logger.error(
        "Something went wrong in the Crud Repo: updateByUserId"
      );
      throw error;
    }
  }
}

export default CrudRepository;
