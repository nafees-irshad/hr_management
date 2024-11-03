const express = require('express');
const approvalController = require('../controllers/approvalController');
const router = express.Router();

// Create approval record
router.post('/create', approvalController.createApproval);

// Get all approval records
router.get('/get-all-only-approval', approvalController.getAllApprovals);

// Get approval record by ID
router.get('/get-one-only-approval/:id', approvalController.getApprovalById);

// Get approval record by ID with associated planning data
router.get('/get-one-approval-associated-planning/:id', approvalController.getApprovalWithPlanning);

router.put('/update-one/:id', approvalController.updateApproval);
router.patch('/update-one-partial/:id', approvalController.patchApproval);

module.exports = router;

//delete left