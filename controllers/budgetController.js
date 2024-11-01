const Budget = require('../models/budgetModel');

exports.createBudget = async (req, res) => {
    try {
        const { planning_id, activity_name, amount } = req.body;
        const budget = await Budget.create({ planning_id, activity_name, amount });
        res.status(201).json(budget);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};