const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const Planning = require('../models/planningModel');

const Approval = sequelize.define('Approval', {
    name: DataTypes.STRING,
    designation: DataTypes.STRING,
    date: DataTypes.DATE,
    signature: DataTypes.BLOB
},{
    tableName: 'approval',
    timestamps: false
});

Planning.hasMany(Approval, { foreignKey: 'planning_id' });
Approval.belongsTo(Planning, { foreignKey: 'planning_id' });

module.exports = Approval;
