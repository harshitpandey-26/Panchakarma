'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.changeColumn('clinic_profiles', 'clinic_name', {
    type: Sequelize.STRING,
    allowNull: true,   // changed from false → true
  });

  await queryInterface.changeColumn('clinic_profiles', 'address', {
    type: Sequelize.TEXT,
    allowNull: true,   // changed from false → true
  });

  await queryInterface.changeColumn('clinic_profiles', 'city', {
    type: Sequelize.STRING,
    allowNull: true,   // changed from false → true
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.changeColumn('clinic_profiles', 'clinic_name', {
    type: Sequelize.STRING,
    allowNull: false,  // rollback to original
  });

  await queryInterface.changeColumn('clinic_profiles', 'address', {
    type: Sequelize.TEXT,
    allowNull: false,  // rollback to original
  });

  await queryInterface.changeColumn('clinic_profiles', 'city', {
    type: Sequelize.STRING,
    allowNull: false,  // rollback to original
  });
}
