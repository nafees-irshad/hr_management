const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const Planning = require('../models/planningModel.js');

const CandidateAssessments = sequelize.define('CandidateAssessments', {
    test_name: DataTypes.STRING,
    test_due_date: DataTypes.DATE,
    test_description: DataTypes.TEXT,
    interview_name: DataTypes.STRING,
    interview_due_date: DataTypes.DATE,
    interview_description: DataTypes.TEXT
},
{
    tableName: 'candidate_assessments',
    timestamps: false
});

Planning.hasMany(CandidateAssessments, { foreignKey: 'planning_id' });
CandidateAssessments.belongsTo(Planning, { foreignKey: 'planning_id' });

module.exports = CandidateAssessments;
