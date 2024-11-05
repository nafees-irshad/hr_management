const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const Requisition = require("../models/requisitionModel.js");

const HiringProcess = sequelize.define(
  "HiringProcess",
  {
    hiring_process_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    requisition_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Requisition, // Name of the requisition table
        key: "requisition_id",
      },
      validate: {
        isInt: true,
      },
    },
    job_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    department: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    created_by: {
      type: DataTypes.STRING(100), // Assuming the username or ID of the creator
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    created_on: {
      type: DataTypes.DATE, // Use DATE type for date/time
      allowNull: false,
      defaultValue: DataTypes.NOW, // Set the default to the current date and time
    },
  },
  {
    tableName: "hiring_processes",
    timestamps: false,
  }
);

module.exports = HiringProcess;
