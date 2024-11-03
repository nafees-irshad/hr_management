const express = require('express');
const budgetController = require('../controllers/budgetController');
const router = express.Router();

// Create budget record
router.post('/create', budgetController.createBudget);

// Get all budget records
router.get('/get-all-only-budget', budgetController.getAllBudgets);

// Get budget record by ID
router.get('/get-one-only-budget/:id', budgetController.getBudgetById);

// Get budget record by ID with associated planning data
router.get('/get-one-budget-associated-planning/:id', budgetController.getBudgetWithPlanning);

router.put('/update-one/:id', budgetController.updateBudget);
router.patch('/update-one-partial/:id', budgetController.patchBudget);

module.exports = router;

//delete left