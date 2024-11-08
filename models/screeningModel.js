/** @format */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const User = require('./userModel.js');

const Screening = sequelize.define(
	'Screening',
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
		tableName: 'screening',
		timestamps: true,
	}
);

module.exports = Screening;
