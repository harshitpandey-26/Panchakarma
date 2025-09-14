"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Clinic_Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{foreignKey: "user_id",as:"user"})
    }
  }
  Clinic_Profile.init(
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
      clinic_name: {
        type:DataTypes.STRING,
        allowNull: false
      },
      address: {
        type:DataTypes.TEXT,
        allowNull: false
      },
      city: {
        type:DataTypes.STRING,
        allowNull: false
      },
      state: {
        type:DataTypes.STRING
      },
      zip_code:{
        type:DataTypes.STRING
      },
      phone: {
        type:DataTypes.INTEGER
      },
      license_number: {
        type:DataTypes.STRING
      },
      established_year: {
        type:DataTypes.INTEGER
      },
    },
    {
      sequelize,
      modelName: "Clinic_Profile",
      tableName: 'clinic_profiles',
      underscored: true,
    }
  );
  return Clinic_Profile;
};
