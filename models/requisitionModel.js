const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("../models/userModel.js");
const BudgetaryImpact = require("../models/budgetaryImpactModel.js");
const FirstPhase = require("../models/firstPhaseModel.js");
const CandidateAssesment = require("../models/candidateAssesmentModel.js");
const Interview = require("../models/interviewModel.js");
const Budget = require("../models/budgetModel.js");
const Approval = require("../models/approvalModel.js");
const Planning = require("../models/planningModel.js");
const Screening = require("../models/screeningModel.js");
const PhoneInterview = require("../models/phoneInterviewsModel.js");
const Programmingtest = require("../models/programmingTestModel.js");
const PanelInterview = require("../models/panelInterviewModel.js");

const Requisition = sequelize.define(
  "Requisition",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    requestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    submittedBy: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employmentType: {
      type: DataTypes.ENUM("Full-time", "Part-time", "Contract", "Internship"),
      allowNull: false,
    },
    justification: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
    recruitingManager: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    resasonOfRecruitment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    businessNeed: {
      type: DataTypes.STRING(600),
      allowNull: true,
    },
    noOfVacancies: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reportsTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    responsibilities: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
    skills: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    workExperience: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
    skillsQualifications: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
    salarySlipOfEmployee: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budgetaryImpact: {
      type: DataTypes.INTEGER,
      references: {
        model: BudgetaryImpact,
        key: "id",
      },
      allowNull: false,
    },
    recommendedApproaches: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supportingDocuments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requestBy: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    reviewdBy: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    approvedBy: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    firstPhase: {
      type: DataTypes.INTEGER,
      references: {
        model: FirstPhase,
        key: "id",
      },
      allowNull: false,
    },
    candidateAssesment: {
      type: DataTypes.INTEGER,
      references: {
        model: CandidateAssesment,
        key: "id",
      },
      allowNull: false,
    },
    interview: {
      type: DataTypes.INTEGER,
      references: {
        model: Interview,
        key: "id",
      },
      allowNull: false,
    },
    budget: {
      type: DataTypes.INTEGER,
      references: {
        model: Budget,
        key: "id",
      },
      allowNull: false,
    },
    approval: {
      type: DataTypes.INTEGER,
      references: {
        model: Approval,
        key: "id",
      },
      allowNull: false,
    },
    planning: {
      type: DataTypes.INTEGER,
      references: {
        model: Planning,
        key: "id",
      },
      allowNull: false,
    },
    screening: {
      type: DataTypes.INTEGER,
      references: {
        model: Screening,
        key: "id",
      },
      allowNull: false,
    },
    phoneInterview: {
      type: DataTypes.INTEGER,
      references: {
        model: PhoneInterview,
        key: "id",
      },
      allowNull: false,
    },
    Programmingtest: {
      type: DataTypes.INTEGER,
      references: {
        model: Programmingtest,
        key: "id",
      },
      allowNull: false,
    },
    panelInterview: {
      type: DataTypes.INTEGER,
      references: {
        model: PanelInterview,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    tableName: "requisitions",
    timestamps: false,
  }
);

module.exports = Requisition;
