/** @format */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const User = require('../models/userModel.js');

const Approvals = sequelize.define(
	'Approvals',
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
				model: "Requisitions", 
				key: 'id',
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
		tableName: 'approvals',
		timestamps: false,
	}
);

module.exports = Approvals;
