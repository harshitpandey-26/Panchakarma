"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Doctor_Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "user_id", as: "user" }),
        this.hasMany(models.Doctor_Profile, {
          foreignKey: "clinic_id",
          as: "doctors",
        });
    }
  }
  Doctor_Profile.init(
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
      clinic_id: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        references: {
          model: "clinic_profiles",
          key: "id",
        },
        onDelete: "SET NULL",
      },
      specialization: {
        type: DataTypes.STRING,
      },
      qualifications: {
        type: DataTypes.TEXT,
      },
      years_of_experience: {
        type: DataTypes.INTEGER,
      },
      license_number: {
        type: DataTypes.STRING,
      },
      bio: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Doctor_Profile",
      tableName: "doctor_profiles",
      underscored: true,
    }
  );
  return Doctor_Profile;
};
