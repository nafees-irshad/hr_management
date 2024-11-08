/** @format */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const budgetaryImpact = sequelize.define(
	'budgetaryImpact',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		requisitionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Requisitions',
				key: 'id',
			},
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
		tableName: 'budgetaryImpact',
		timestamps: false,
	}
);

module.exports = budgetaryImpact;
