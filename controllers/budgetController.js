const Budget = require('../models/budgetModel');
const Planning = require('../models/planningModel'); // Assuming Planning is the parent table

exports.createBudget = async (req, res) => {
    try {
        const { planning_id, activity_name, amount } = req.body;
        const budget = await Budget.create({ planning_id, activity_name, amount });
        res.status(201).json(budget);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all budget records
exports.getAllBudgets = async (req, res) => {
    try {
        const budgets = await Budget.findAll();
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get budget record by ID
exports.getBudgetById = async (req, res) => {
    try {
        const { id } = req.params;
        const budget = await Budget.findByPk(id);
        
        if (!budget) {
            return res.status(404).json({ message: "Budget record not found" });
        }

        res.status(200).json(budget);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get budget record by ID with associated planning data
exports.getBudgetWithPlanning = async (req, res) => {
    try {
        const { id } = req.params;
        const budget = await Budget.findByPk(id, {
            include: [{ model: Planning }]
        });

        if (!budget) {
            return res.status(404).json({ message: "Budget not found" });
        }

        res.status(200).json(budget);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateBudget = async (req, res) => {
    try {
        const { id } = req.params; // ID of the budget record to update
        const updatedBudget = await Budget.update(req.body, {
            where: { id },
            returning: true
        });

        if (!updatedBudget[0]) {
            return res.status(404).json({ message: "Budget record not found" });
        }

        res.status(200).json(updatedBudget[1][0]); // Return the updated record
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.patchBudget = async (req, res) => {
    try {
        const { id } = req.params; // ID of the budget record to patch
        const [updated] = await Budget.update(req.body, {
            where: { id }
        });

        if (!updated) {
            return res.status(404).json({ message: "Budget record not found" });
        }

        const updatedBudget = await Budget.findByPk(id);
        res.status(200).json(updatedBudget);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBudget = async (req, res) => {
    try {
        const { id } = req.params;
        const budget = await Budget.findByPk(id);

        if (!budget) {
            return res.status(404).json({ message: "Budget record not found" });
        }

        await Budget.destroy({ where: { id } });
        res.status(200).json({ message: "Budget record deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
