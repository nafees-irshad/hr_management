const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("../models/userModel.js");
const Requisition = require("../models/requisitionModel.js");

const Budget = sequelize.define(
  "Budget",
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
    activityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "budget",
    timestamps: true,
  }
);

module.exports = Budget;
