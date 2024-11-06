"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Requisitions", {
      requisition_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      request_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          len: [1, 50],
        },
      },
      submitted_by: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      recruiting_manager: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      department: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      required_by: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      reason_for_recruitment: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      business_need: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      no_of_vacancies: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1,
        },
      },
      reports_to: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      job_title: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      employment_type: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [["Full-time", "Part-time", "Contract"]],
        },
      },
      experience: {
        type: Sequelize.STRING(50),
        allowNull: true,
        validate: {
          len: [1, 50],
        },
      },
      justification: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      responsibilities: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      skills: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      education: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      work_experience: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      skills_qualifications: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      budgetary_impact: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      recommended_approach: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      supporting_documents: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
      approval_history: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      date_posted: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      status: {
        // New status field
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          isIn: [
            [
              "ongoing",
              "paused",
              "in review",
              "to publish",
              "cancelled",
              "hired",
              "denied",
              "onboarding",
              "closed",
            ],
          ],
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Requisitions");
  },
};
