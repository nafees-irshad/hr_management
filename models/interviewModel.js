const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("../models/userModel.js");
// const Requisition = require("../models/requisitionModel.js");

const Interview = sequelize.define(
  "Interview",
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
    interviewName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descriptionofTest: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
  },
  {
    tableName: "Interview",
    timestamps: false,
  }
);

module.exports = Interview;
