"use strict";
import { Model } from "sequelize";

import { ROLES } from "../utils/common/enum.js";

const { PATIENT, CLINIC, DOCTOR, ADMIN } = ROLES;

export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Patient_Profile, {
        foreignKey: "user_id",
        as: "patientProfile", 
        onDelete: "CASCADE",
      });
      this.hasOne(models.Doctor_Profile, {
        foreignKey: "user_id",
        as: "doctorProfile",
        onDelete: "CASCADE",
      });
      this.hasOne(models.Clinic_Profile, {
        foreignKey: "user_id",
        as: "clinicProfile",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [6,100]
        }
      },
      role: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [PATIENT, CLINIC, DOCTOR, ADMIN],
        defaultValue: PATIENT,
        validate:{
          isIn: [[PATIENT,CLINIC,ADMIN,DOCTOR]]
        }
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true
    }
  );
  return User;
};
