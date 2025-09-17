"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Question_Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Question, {
        foreignKey: "question_id",
        as: "question",
      });
    }
  }
  Question_Option.init(
    {
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "questions",
          key: "id",
        }
      },
      option_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vata_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      pitta_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      kapha_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Question_Option",
      tableName: "question_options",
      timestamps: true,
      underscored: true,
    }
  );
  return Question_Option;
};
