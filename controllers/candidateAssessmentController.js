const CandidateAssessments = require('../models/candidateAssessmentModel');
const Planning = require('../models/planningModel'); // Assuming Planning is the parent table

// Create a candidate assessment
exports.createCandidateAssessment = async (req, res) => {
    try {
        const { planning_id, test_name, test_due_date, test_description, interview_name, interview_due_date, interview_description } = req.body;
        const assessment = await CandidateAssessments.create({
            planning_id,
            test_name,
            test_due_date,
            test_description,
            interview_name,
            interview_due_date,
            interview_description
        });
        res.status(201).json(assessment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all candidate assessments records
exports.getAllCandidateAssessments = async (req, res) => {
    try {
        const candidateAssessments = await CandidateAssessments.findAll();
        res.status(200).json(candidateAssessments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get one candidate assessment by ID
exports.getCandidateAssessmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const candidateAssessment = await CandidateAssessments.findByPk(id);
        
        if (!candidateAssessment) {
            return res.status(404).json({ message: "Candidate assessment not found" });
        }

        res.status(200).json(candidateAssessment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get one candidate assessment by ID with associated planning data
exports.getCandidateAssessmentWithPlanning = async (req, res) => {
    try {
        const { id } = req.params;
        const candidateAssessment = await CandidateAssessments.findByPk(id, {
            include: [{ model: Planning }]
        });

        if (!candidateAssessment) {
            return res.status(404).json({ message: "Candidate assessment not found" });
        }

        res.status(200).json(candidateAssessment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCandidateAssessment = async (req, res) => {
    try {
        const { id } = req.params; // ID of the candidate assessment to update
        const updatedAssessment = await CandidateAssessments.update(req.body, {
            where: { id },
            returning: true
        });

        if (!updatedAssessment[0]) {
            return res.status(404).json({ message: "Candidate assessment not found" });
        }

        res.status(200).json(updatedAssessment[1][0]); // Return the updated record
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.patchCandidateAssessment = async (req, res) => {
    try {
        const { id } = req.params; // ID of the candidate assessment to patch
        const [updated] = await CandidateAssessments.update(req.body, {
            where: { id }
        });

        if (!updated) {
            return res.status(404).json({ message: "Candidate assessment not found" });
        }

        const updatedAssessment = await CandidateAssessments.findByPk(id);
        res.status(200).json(updatedAssessment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

