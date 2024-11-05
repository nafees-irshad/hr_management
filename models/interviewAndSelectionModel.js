const { DataTypes } = require("sequelize");
const Users = require("./userModel");
const HiringProcess = require("./hiringProcessModel");
const sequelize = require("../config/db.js");

const InterviewAndSelection = sequelize.define(
  "InterviewAndSelection",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
      allowNull: false,
    },
    jobId: {
      type: DataTypes.INTEGER,
      references: {
        model: HiringProcess,
        key: "hiring_process_id",
      },
      allowNull: false,
    },
    question: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    questionType: {
      type: DataTypes.ENUM,
      values: [
        "Short Answer",
        "Paragraph",
        "Date",
        "Yes/No",
        "Dropdwn",
        "Multiple Choice",
      ],
      allowNull: false,
    },
    questionData: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    preferredAnswer: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    tableName: "InterviewAndSelection",
    timestamps: false,
  }
);

module.exports = InterviewAndSelection;
