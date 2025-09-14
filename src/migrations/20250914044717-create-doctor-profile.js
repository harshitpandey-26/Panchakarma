'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('doctor_profiles', {
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
    specialization: {
      type: Sequelize.STRING
    },
    qualifications: {
      type: Sequelize.TEXT
    },
    years_of_experience: {
      type: Sequelize.INTEGER
    },
    license_number: {
      type: Sequelize.STRING
    },
    bio: {
      type: Sequelize.TEXT
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
  await queryInterface.dropTable('doctor_profiles');
}