/** @format */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const User = require('./userModel.js');

const BackgroundCheck = sequelize.define(
	'BackgroundCheck',
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
				model: 'Requisitions',
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
		tableName: 'backgroundCheck',
		timestamps: true,
	}
);

module.exports = BackgroundCheck;
