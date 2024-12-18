const { DataTypes } = require("sequelize");
const Users = require("./userModel");
const HiringProcess = require("./hiringProcessModel");
const sequelize = require("../config/db.js");

const sourcingAndScreening = sequelize.define(
  "sourcingAndScreening",
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
        "Multiple choice",
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
    tableName: "sourcingAndScreening",
    timestamps: false,
  }
);

module.exports = sourcingAndScreening;
