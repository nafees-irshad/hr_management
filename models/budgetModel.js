/** @format */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const User = require('../models/userModel.js');

const Budget = sequelize.define(
	'Budget',
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
				key: 'id',
			},
		},
		requisitionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "Requisitions", // Name of the requisition table
				key: 'id',
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
		tableName: 'budget',
		timestamps: true,
	}
);

module.exports = Budget;
