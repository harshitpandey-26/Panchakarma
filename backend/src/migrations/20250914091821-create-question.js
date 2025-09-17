"use strict";
/** @type {import('sequelize-cli').Migration} */

import { CATEGORY } from "../utils/common/enum.js";

const { GENERAL, VATA, PITTA, KAPHA } = CATEGORY;

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("questions", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    question_text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    category: {
      type: Sequelize.ENUM,
      allowNull: false,
      values: [GENERAL, VATA, PITTA, KAPHA],
      defaultValue: GENERAL,
      validate: {
        isIn: [[GENERAL, VATA, PITTA, KAPHA]],
      },
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
  await queryInterface.dropTable("questions");
}
