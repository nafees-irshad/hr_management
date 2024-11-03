const express = require('express');
const budgetController = require('../controllers/budgetController');
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

// POST: Create a new budget
router.post('/create', authenticateUser, budgetController.createBudget);

// GET: Retrieve all budget records
router.get('/all', authenticateUser, budgetController.getAllBudgets);

// GET: Retrieve a specific budget by ID
router.get('/:id', authenticateUser, budgetController.getBudgetById);

// GET: Retrieve a specific budget with associated planning data by ID
router.get('/:id/planning', authenticateUser, budgetController.getBudgetWithPlanning);

// PUT: Update an entire budget by ID
router.put('/:id', authenticateUser, budgetController.updateBudget);

// PATCH: Update partial fields of a budget by ID
router.patch('/:id', authenticateUser, budgetController.patchBudget);

// DELETE: Delete a specific budget by ID
router.delete('/:id', authenticateUser, budgetController.deleteBudget);

module.exports = router;
