const FirstPhase = require('../models/firstPhaseModel');
const Planning = require('../models/planningModel');

exports.createFirstPhase = async (req, res) => {
    try {
        const { planning_id, sourcing_method, recruitment_channels, job_posting_date, hiring_date } = req.body;
        const firstPhase = await FirstPhase.create({ planning_id, sourcing_method, recruitment_channels, job_posting_date, hiring_date });
        res.status(201).json(firstPhase);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all first phase records
exports.getAllFirstPhase = async (req, res) => {
    try {
        const firstPhaseRecords = await FirstPhase.findAll();
        res.status(200).json(firstPhaseRecords);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get first phase record by ID
exports.getFirstPhaseById = async (req, res) => {
    try {
        const { id } = req.params;
        const firstPhaseRecord = await FirstPhase.findByPk(id);
        
        if (!firstPhaseRecord) {
            return res.status(404).json({ message: "First phase record not found" });
        }

        res.status(200).json(firstPhaseRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get first phase record by ID along with associated Planning
exports.getFirstPhaseWithPlanningById = async (req, res) => {
    try {
        const { id } = req.params;
        const firstPhaseRecord = await FirstPhase.findByPk(id, {
            include: [
                {
                    model: Planning, // Include the associated Planning model
                }
            ]
        });

        if (!firstPhaseRecord) {
            return res.status(404).json({ message: "First phase record not found" });
        }

        res.status(200).json(firstPhaseRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT - Update entire FirstPhase record
exports.updateFirstPhase = async (req, res) => {
    try {
        const { id } = req.params;
        const firstPhaseData = req.body;

        const firstPhaseRecord = await FirstPhase.findByPk(id);
        if (!firstPhaseRecord) return res.status(404).json({ message: "First phase record not found" });

        await firstPhaseRecord.update(firstPhaseData);
        res.status(200).json(firstPhaseRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PATCH - Update partial FirstPhase record
exports.patchFirstPhase = async (req, res) => {
    try {
        const { id } = req.params;
        const firstPhaseData = req.body;

        const firstPhaseRecord = await FirstPhase.findByPk(id);
        if (!firstPhaseRecord) return res.status(404).json({ message: "First phase record not found" });

        await firstPhaseRecord.update(firstPhaseData);
        res.status(200).json(firstPhaseRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete First Phase record by ID
exports.deleteFirstPhase = async (req, res) => {
    try {
        const { id } = req.params;
        const firstPhaseRecord = await FirstPhase.findByPk(id);

        if (!firstPhaseRecord) {
            return res.status(404).json({ message: "First phase record not found" });
        }

        await firstPhaseRecord.destroy();
        res.status(200).json({ message: "First phase record deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
