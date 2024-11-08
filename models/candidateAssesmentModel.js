/** @format */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const User = require('../models/userModel.js');

const CandidateAssesment = sequelize.define(
	'CandidateAssesmentModel',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
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
				model: 'Requisitions',
				key: 'id',
			},
		},
		testName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dueDate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		descriptionOfTest: {
			type: DataTypes.STRING(600),
			allowNull: false,
		},
	},
	{
		tableName: 'candidateAssesmentModel',
		timestamps: false,
	}
);

module.exports = CandidateAssesment;
