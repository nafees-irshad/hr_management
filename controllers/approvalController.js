const Approval = require('../models/approvalModel');

exports.createApproval = async (req, res) => {
    try {
        const { planning_id, name, designation, date, signature } = req.body;
        const approval = await Approval.create({ planning_id, name, designation, date, signature });
        res.status(201).json(approval);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all approval records
exports.getAllApprovals = async (req, res) => {
    try {
        const approvals = await Approval.findAll();
        res.status(200).json(approvals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get approval record by ID
exports.getApprovalById = async (req, res) => {
    try {
        const { id } = req.params;
        const approval = await Approval.findByPk(id);
        
        if (!approval) {
            return res.status(404).json({ message: "Approval record not found" });
        }

        res.status(200).json(approval);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get approval record by ID with associated planning data
exports.getApprovalWithPlanning = async (req, res) => {
    try {
        const { id } = req.params;
        const approval = await Approval.findByPk(id, {
            include: [{ model: Planning }] // Including associated Planning data
        });
        
        if (!approval) {
            return res.status(404).json({ message: "Approval record not found" });
        }

        res.status(200).json(approval);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateApproval = async (req, res) => {
    try {
        const { id } = req.params; // ID of the approval record to update
        const updatedApproval = await Approval.update(req.body, {
            where: { id },
            returning: true
        });

        if (!updatedApproval[0]) {
            return res.status(404).json({ message: "Approval record not found" });
        }

        res.status(200).json(updatedApproval[1][0]); // Return the updated record
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.patchApproval = async (req, res) => {
    try {
        const { id } = req.params; // ID of the approval record to patch
        const [updated] = await Approval.update(req.body, {
            where: { id }
        });

        if (!updated) {
            return res.status(404).json({ message: "Approval record not found" });
        }

        const updatedApproval = await Approval.findByPk(id);
        res.status(200).json(updatedApproval);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
