const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const Requisition = require("../models/requisitionModel.js");
const budgetaryImpact = sequelize.define(
  "budgetaryImpact",
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
      allowNull: false,
    },
    salaryHead: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "budgetaryImpact",
    timestamps: false,
  }
);

module.exports = budgetaryImpact;
