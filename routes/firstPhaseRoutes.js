const express = require('express');
const FirstPhaseController = require("../controllers/firstPhaseController");
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

// POST: Create a new first phase record
router.post('/create', authenticateUser, FirstPhaseController.createFirstPhase);

// GET: Retrieve all first phase records
router.get('/all', authenticateUser, FirstPhaseController.getAllFirstPhase);

// GET: Retrieve a specific first phase record by ID
router.get('/:id', authenticateUser, FirstPhaseController.getFirstPhaseById);

// GET: Retrieve a specific first phase record with associated planning data by ID
router.get('/:id/planning', authenticateUser, FirstPhaseController.getFirstPhaseWithPlanningById);

// PUT: Update an entire first phase record by ID
router.put('/:id', authenticateUser, FirstPhaseController.updateFirstPhase);

// PATCH: Update partial fields of a first phase record by ID
router.patch('/:id', authenticateUser, FirstPhaseController.patchFirstPhase);

// DELETE: Delete a specific first phase record by ID
router.delete('/:id', authenticateUser, FirstPhaseController.deleteFirstPhase);

module.exports = router;
