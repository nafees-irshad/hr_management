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

// PUT - Update entire Planning record and its children
exports.updatePlanningWithChildren = async (req, res) => {
    try {
        const { id } = req.params;
        const { planningData, firstPhaseData, candidateAssessmentsData, budgetData, approvalData } = req.body;

        const planningRecord = await Planning.findByPk(id);
        if (!planningRecord) return res.status(404).json({ message: "Planning record not found" });

        // Update Planning data
        await planningRecord.update(planningData);

        // Update each child table if data is provided
        if (firstPhaseData) await FirstPhase.update(firstPhaseData, { where: { planning_id: id } });
        if (candidateAssessmentsData) await CandidateAssessments.update(candidateAssessmentsData, { where: { planning_id: id } });
        if (budgetData) await Budget.update(budgetData, { where: { planning_id: id } });
        if (approvalData) await Approval.update(approvalData, { where: { planning_id: id } });

        res.status(200).json({ message: "Planning and associated records updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PATCH - Update partial data for Planning and its children
exports.patchPlanningWithChildren = async (req, res) => {
    try {
        const { id } = req.params;
        const { planningData, firstPhaseData, candidateAssessmentsData, budgetData, approvalData } = req.body;

        const planningRecord = await Planning.findByPk(id);
        if (!planningRecord) return res.status(404).json({ message: "Planning record not found" });

        // Update Planning data
        if (planningData) await planningRecord.update(planningData);

        // Update each child table if partial data is provided
        if (firstPhaseData) await FirstPhase.update(firstPhaseData, { where: { planning_id: id } });
        if (candidateAssessmentsData) await CandidateAssessments.update(candidateAssessmentsData, { where: { planning_id: id } });
        if (budgetData) await Budget.update(budgetData, { where: { planning_id: id } });
        if (approvalData) await Approval.update(approvalData, { where: { planning_id: id } });

        res.status(200).json({ message: "Planning and associated records updated partially" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};