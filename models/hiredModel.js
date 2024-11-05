const { DataTypes } = require("sequelize");
const Users = require("./userModel");
const HiringProcess = require("./hiringProcessModel");
const sequelize = require("../config/db.js");

const Hiring = sequelize.define(
  "Hiring",
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
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    offerDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    employeesName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    jobType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salaryAmount: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salaryPeriod: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    workingHours: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    probabtionTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    offerExpiryDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hrName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    managerName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "Hiring",
    timestamps: false,
  }
);

module.exports = Hiring;
