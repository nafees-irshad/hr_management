const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("../models/userModel.js");
// const Requisition = require("../models/requisitionModel.js");

const Approvals = sequelize.define(
  "Approvals",
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    signature: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "approvals",
    timestamps: false,
  }
);

module.exports = Approvals;
