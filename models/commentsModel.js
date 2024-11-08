/** @format */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const User = require('./userModel.js');

const Comments = sequelize.define(
	'Comments',
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
		comment: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: 'comments',
		timestamps: true,
	}
);

module.exports = Comments;
