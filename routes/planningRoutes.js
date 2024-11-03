const express = require('express');
const router = express.Router();
const planningController = require('../controllers/planningController');
const authenticateUser = require("../middleware/authMiddleware");

// POST: Create a new planning record
router.post('/create', authenticateUser, planningController.createPlanning);

// GET: Retrieve all planning records (without associated child data)
router.get('/all', authenticateUser, planningController.getAllPlanning);

// GET: Retrieve all planning records with associated child data
router.get('/all/associations', authenticateUser, planningController.getPlanning);

// GET: Retrieve a specific planning record by ID (without associated data)
router.get('/:id', authenticateUser, planningController.getOnlyPlanningById);

// GET: Retrieve a specific planning record by ID with associated data
router.get('/:id/associations', authenticateUser, planningController.getPlanningById);

// PUT: Update an entire planning record by ID, including all associated child data
router.put('/:id', authenticateUser, planningController.updatePlanningWithChildren);

// PATCH: Update partial data of a planning record by ID, including specified child data
router.patch('/:id', authenticateUser, planningController.patchPlanningWithChildren);

// DELETE: Delete a specific planning record by ID, along with associated child records
router.delete('/:id', authenticateUser, planningController.deletePlanning);

// DELETE: Delete all planning records and their associated child records
router.delete('/all', authenticateUser, planningController.deleteAllPlanning);

module.exports = router;
