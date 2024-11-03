const express = require('express');
const approvalController = require('../controllers/approvalController');
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

// POST: Create a new approval
router.post('/create', authenticateUser, approvalController.createApproval);

// GET: Retrieve all approvals
router.get('/all', authenticateUser, approvalController.getAllApprovals);

// GET: Retrieve a specific approval by ID
router.get('/:id', authenticateUser, approvalController.getApprovalById);

// GET: Retrieve a specific approval with associated planning data by ID
router.get('/:id/planning', authenticateUser, approvalController.getApprovalWithPlanning);

// PUT: Update an entire approval by ID
router.put('/:id', authenticateUser, approvalController.updateApproval);

// PATCH: Update partial fields of an approval by ID
router.patch('/:id', authenticateUser, approvalController.patchApproval);

// DELETE: Delete a specific approval by ID
router.delete('/:id', authenticateUser, approvalController.deleteApproval);

module.exports = router;
