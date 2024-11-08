/** @format */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const User = require('./userModel.js');

const OnBoardingProcess = sequelize.define(
	'OnBoardingProcess',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		requisitionId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'Requisitions',
				key: 'id',
			},
		},
		userId: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: 'id',
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
		tableName: 'onBoardingProcess',
		timestamps: true,
	}
);

module.exports = OnBoardingProcess;
