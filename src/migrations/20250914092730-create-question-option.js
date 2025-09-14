'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('question_options', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    question_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    option_text: {
      type: Sequelize.STRING,
      allowNull: false
    },
    vata_score: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pitta_score: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    kapha_score: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('question_options');
}