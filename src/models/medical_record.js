"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Medical_Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Patient_Profile, {
        foreignKey: "patient_id",
        as: "patient" 
      });
    }
  }
  Medical_Record.init(
    {
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "patient_profiles",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      file_path: {
        type: DataTypes.STRING,
      },
      record_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      record_type: {
        type: DataTypes.STRING, // e.g., 'lab_report', 'prescription', 'scan'
      },
    },
    {
      sequelize,
      modelName: "Medical_Record",
      tableName: "medical_records",
      timestamps: true,
      underscored: true,
    }
  );
  return Medical_Record;
};
