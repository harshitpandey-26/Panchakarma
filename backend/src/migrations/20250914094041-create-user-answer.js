'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('user_answers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    session_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    question_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    option_id: {
      type: Sequelize.INTEGER,
      allowNull: false
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
  await queryInterface.dropTable('user_answers');
}