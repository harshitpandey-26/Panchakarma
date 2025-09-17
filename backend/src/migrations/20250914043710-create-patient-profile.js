'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('patient_profiles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      references:{
        model: "users",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    date_of_birth: {
      type: Sequelize.DATE
    },
    gender: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.INTEGER
    },
    blood_group: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('patient_profiles');
}