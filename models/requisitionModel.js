const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const HiringProcess = require("../models/hiringProcessModel.js");

const Requisition = sequelize.define(
  "Requisition",
  {
    requisition_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [1, 50],
      },
    },
    submitted_by: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    recruiting_manager: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    required_by: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    reason_for_recruitment: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    business_need: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    no_of_vacancies: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 1,
      },
    },
    reports_to: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    job_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    employment_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [["Full-time", "Part-time", "Contract"]],
      },
    },
    experience: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        len: [1, 50],
      },
    },
    justification: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    responsibilities: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    skills: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    education: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    work_experience: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    skills_qualifications: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    budgetary_impact: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    recommended_approach: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    supporting_documents: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    approval_history: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date_posted: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    status: {
      // New status field
      type: DataTypes.STRING(20),
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
  },
  {
    tableName: "requisitions",
    timestamps: false,
  }
);

module.exports = Requisition;
