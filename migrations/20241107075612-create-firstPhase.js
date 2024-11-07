"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FirstPhase", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      sourcingMethod: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      recruitmentChannels: {
        type: Sequelize.ENUM,
        values: [
          "Job Boards",
          "Social Media",
          "Mainstream Media",
          "Employee Referrals",
          "Headhunters",
          "Campus Recruitment",
        ],
        allowNull: false,
      },
      plannedJobPostingDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hiringDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("FirstPhase");
  },
};
