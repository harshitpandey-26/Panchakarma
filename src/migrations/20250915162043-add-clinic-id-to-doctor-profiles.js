'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('doctor_profiles', 'clinic_id', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'clinic_profiles',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('doctor_profiles', 'clinic_id');
}