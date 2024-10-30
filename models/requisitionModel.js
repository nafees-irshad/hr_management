const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const HiringProcess = require("../models/hiringProcessModel.js");

const Requisition = sequelize.define("Requisition", {
  requisition_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  request_id: {
    type: DataTypes.STRING(50),
    allowNull: false, // Make this field required
    unique: true, // Ensure request_id is unique
    validate: {
      notEmpty: true, // Prevent empty strings
      len: [1, 50], // Limit length to 1-50 characters
    },
  },
  submitted_by: {
    type: DataTypes.STRING(100),
    allowNull: false, // Make this field required
    validate: {
      notEmpty: true,
      isAlpha: true, // Only allow letters
    },
  },
  recruiting_manager: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true, // Only allow letters
    },
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
    validate: {
      isDate: true, // Ensure a valid date format
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
      isInt: true, // Only allow integers
      min: 1, // At least 1 vacancy
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
      isIn: [["Full-time", "Part-time", "Contract"]], // Restrict to specific values
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
    type: DataTypes.TEXT,
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
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  tableName: 'requisitions',
  timestamps: false,
});


module.exports = Requisition;
