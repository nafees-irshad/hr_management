const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("./userModel.js");
const Requisition = require("./requisitionModel.js");

const PhoneInterviews = sequelize.define(
  "PhoneInterviews",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    requisitionId: {
      type: DataTypes.INTEGER,
      references: {
        model: Requisition,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finishDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    resoucesName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "phoneInterviews",
    timestamps: true,
  }
);

module.exports = PhoneInterviews;
