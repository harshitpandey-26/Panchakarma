'use strict';

export async function up(queryInterface, Sequelize) {
  // Make user_id nullable
  await queryInterface.changeColumn('doctor_profiles', 'user_id', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'CASCADE',
  });

  // Add new columns
  await queryInterface.addColumn('doctor_profiles', 'invitation_token', {
    type: Sequelize.STRING,
    allowNull: true
  });

  await queryInterface.addColumn('doctor_profiles', 'invitation_sent_at', {
    type: Sequelize.DATE,
    allowNull: true
  });

  await queryInterface.addColumn('doctor_profiles', 'invitation_accepted_at', {
    type: Sequelize.DATE,
    allowNull: true
  });

  await queryInterface.addColumn('doctor_profiles', 'status', {
    type: Sequelize.ENUM('pending', 'active', 'inactive'),
    defaultValue: 'pending'
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.changeColumn('doctor_profiles', 'user_id', {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'CASCADE',
  });

  await queryInterface.removeColumn('doctor_profiles', 'invitation_token');
  await queryInterface.removeColumn('doctor_profiles', 'invitation_sent_at');
  await queryInterface.removeColumn('doctor_profiles', 'invitation_accepted_at');
  await queryInterface.removeColumn('doctor_profiles', 'status');
}