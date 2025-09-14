'use strict';
/** @type {import('sequelize-cli').Migration} */

import {ROLES} from '../utils/common/enum.js';

const {PATIENT,CLINIC,DOCTOR,ADMIN} = ROLES;

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    role: {
      type: Sequelize.ENUM,
      allowNull: false,
      values: [PATIENT,CLINIC,ADMIN,DOCTOR],
      defaultValue: PATIENT
    },
    is_verified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
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
  await queryInterface.dropTable('users');
}