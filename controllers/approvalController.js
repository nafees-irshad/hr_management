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