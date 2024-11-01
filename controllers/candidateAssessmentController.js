const CandidateAssessments = require('../models/candidateAssessmentModel');

exports.createCandidateAssessment = async (req, res) => {
    try {
        const { planning_id, test_name, test_due_date, test_description, interview_name, interview_due_date, interview_description } = req.body;
        const assessment = await CandidateAssessments.create({ planning_id, test_name, test_due_date, test_description, interview_name, interview_due_date, interview_description });
        res.status(201).json(assessment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};