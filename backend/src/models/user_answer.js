"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User_Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User_Session, {
        foreignKey: "session_id",
        as: "session",
        targetKey: "session_id",
      }),
        this.belongsTo(models.Question, {
          foreignKey: "question_id",
          as: "question",
        }),
        this.belongsTo(models.Question_Option, {
          foreignKey: "option_id",
          as: "selected_option",
        });
    }
  }
  User_Answer.init(
    {
      session_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
          model:"user_sessions",
          key: "session_id"
        }
      },
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model: "questions",
          key: "id"
        }
      },
      option_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model: "question_options",
          key: "id"
                
        }
      },
    },
    {
      sequelize,
      modelName: "User_Answer",
      tableName: "user_answers",
      timestamps: true,
      underscored: true,
      indexes:[
        {
          unique:true,
          fields:["session_id","question_id"]
        }
      ]
    }
  );
  return User_Answer;
};
