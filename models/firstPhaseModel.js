const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const Planning = require('../models/planningModel.js');

const FirstPhase = sequelize.define('FirstPhase', {
    sourcing_method: DataTypes.STRING,
    recruitment_channels: DataTypes.ENUM('Social Media', 'Job Boards', 'Headhunters'), // Update with actual values
    job_posting_date: DataTypes.DATE,
    hiring_date: DataTypes.DATE
},{
    tableName: 'first_phase',
    timestamps: false
});

Planning.hasMany(FirstPhase, { foreignKey: 'planning_id' });
FirstPhase.belongsTo(Planning, { foreignKey: 'planning_id' });

module.exports = FirstPhase;
