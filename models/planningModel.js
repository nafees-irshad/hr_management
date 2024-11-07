const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("../models/userModel.js");
// const Requisition = require("../models/requisitionModel.js");

const Planning = sequelize.define(
  "Planning",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // requisitionId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: Requisition,
    //     key: "id",
    //   },
    // },
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
    tableName: "planning",
    timestamps: false,
  }
);

module.exports = Planning;
