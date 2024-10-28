const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Requisition = sequelize.define("Requisition", {
  requisition_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  request_id: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  submitted_by: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  recruiting_manager: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  department: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  reason_for_recruitment: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  business_need: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  no_of_vacancies: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reports_to: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  job_title: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  employment_type: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  experience: {
    type: DataTypes.STRING(50),
    allowNull: true,
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
    type: DataTypes.DATE, // Use DATE for timestamps
    defaultValue: DataTypes.NOW, // Automatically set to current date and time
    allowNull: false,
  },
}, {
  tableName: 'requisitions',
  timestamps: false, // Set to true if you want Sequelize to manage createdAt and updatedAt fields automatically
});

module.exports = Requisition;
