const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("../models/userModel.js");
const Requisition = require("../models/requisitionModel.js");

const FirstPhase = sequelize(
  "FirstPhase",
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
    requisitionId: {
      type: DataTypes.INTEGER,
      references: {
        model: Requisition,
        key: "id",
      },
      allowNull: false,
    },
    sourcingMethod: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    recruitmentChannels: {
      type: DataTypes.ENUM,
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
      type: DataTypes.DATE,
      allowNull: false,
    },
    hiringDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "FirstPhase",
    timestamps: false,
  }
);

module.exports = FirstPhase;
