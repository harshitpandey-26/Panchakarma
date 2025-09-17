"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User_Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User_Answer, {
        foreignKey: "session_id",
        as: "answers",
        sourceKey: "session_id",
      });
    }
  }
  User_Session.init(
    {
      session_id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      vata_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      pitta_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      kapha_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      is_complete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User_Session",
      tableName: "user_sessions",
      timestamps: true,
      underscored: true,
    }
  );
  return User_Session;
};
