"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("user_sessions", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    session_id: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false,
    },
    vata_total: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    pitta_total: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    kapha_total: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    is_complete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("user_sessions");
}
