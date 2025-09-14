"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Patient_Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    }
  }
  Patient_Profile.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      date_of_birth: {
        type: DataTypes.DATE,
      },
      gender: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      blood_group: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Patient_Profile",
      tableName: "patient_profiles", 
      underscored: true,
    }
  );
  return Patient_Profile;
};
