const Planning = require('../models/planningModel');
const FirstPhase = require('../models/firstPhaseModel');
const CandidateAssessments = require('../models/candidateAssessmentModel');
const Budget = require('../models/budgetModel');
const Approval = require('../models/approvalModel');

exports.createPlanning = async (req, res) => {
    try {
        const { plan_name, created_date } = req.body;
        const planning = await Planning.create({ plan_name, created_date });
        res.status(201).json(planning);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetch all plans with associated data
exports.getPlanning = async (req, res) => {
    try {
        const planningRecords = await Planning.findAll({
            include: [
                { model: FirstPhase },
                { model: CandidateAssessments },
                { model: Budget },
                { model: Approval }
            ]
        });
        res.status(200).json(planningRecords);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetch all plans by id with associated data
exports.getPlanningById = async (req, res) => {
    try {
        const { id } = req.params;
        const planningRecord = await Planning.findByPk(id, {
            include: [
                { model: FirstPhase },
                { model: CandidateAssessments },
                { model: Budget },
                { model: Approval }
            ]
        });
        
        if (!planningRecord) {
            return res.status(404).json({ message: "Planning record not found" });
        }

        res.status(200).json(planningRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all planning records
exports.getAllPlanning = async (req, res) => {
    try {
        const planningRecords = await Planning.findAll();
        res.status(200).json(planningRecords);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get planning record by ID
exports.getOnlyPlanningById = async (req, res) => {
    try {
        const { id } = req.params;
        const planningRecord = await Planning.findByPk(id);
        
        if (!planningRecord) {
            return res.status(404).json({ message: "Planning record not found" });
        }

        res.status(200).json(planningRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};