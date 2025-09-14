"use strict";
import { Model } from "sequelize";

import { CATEGORY } from "../utils/common/enum.js";

const { GENERAL, VATA, PITTA, KAPHA } = CATEGORY;

export default (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Question_Option, {
        foreignKey: "question_id",
        as: "options",
      });
    }
  }
  Question.init(
    {
      question_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [GENERAL, VATA, PITTA, KAPHA],
        defaultValue: GENERAL,
      },
    },
    {
      sequelize,
      modelName: "Question",
      tableName: "questions",
      timestamps: true,
      underscored: true,
    }
  );
  return Question;
};
