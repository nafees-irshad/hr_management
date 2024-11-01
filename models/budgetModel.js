const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const Planning = require('../models/planningModel');

const Budget = sequelize.define('Budget', {
    activity_name: DataTypes.STRING,
    amount: DataTypes.INTEGER
}, {
    tableName: 'budget',
    timestamps: false
});

Planning.hasMany(Budget, { foreignKey: 'planning_id' });
Budget.belongsTo(Planning, { foreignKey: 'planning_id' });

module.exports = Budget;
