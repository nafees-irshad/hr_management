const express = require('express');
const candidateAssessmentController = require('../controllers/candidateAssessmentController');
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

// POST: Create a new candidate assessment
router.post('/create', authenticateUser, candidateAssessmentController.createCandidateAssessment);

// GET: Retrieve all candidate assessments
router.get('/all', authenticateUser, candidateAssessmentController.getAllCandidateAssessments);

// GET: Retrieve a specific candidate assessment by ID
router.get('/:id', authenticateUser, candidateAssessmentController.getCandidateAssessmentById);

// GET: Retrieve a specific candidate assessment with associated planning data by ID
router.get('/:id/planning', authenticateUser, candidateAssessmentController.getCandidateAssessmentWithPlanning);

// PUT: Update an entire candidate assessment by ID
router.put('/:id', authenticateUser, candidateAssessmentController.updateCandidateAssessment);

// PATCH: Update partial fields of a candidate assessment by ID
router.patch('/:id', authenticateUser, candidateAssessmentController.patchCandidateAssessment);

// DELETE: Delete a specific candidate assessment by ID
router.delete('/:id', authenticateUser, candidateAssessmentController.deleteCandidateAssessment);

module.exports = router;
