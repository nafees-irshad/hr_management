const express = require('express');
const candidateAssessmentController = require('../controllers/candidateAssessmentController');
const router = express.Router();

// Route to create a candidate assessment
router.post('/create', candidateAssessmentController.createCandidateAssessment);

// Route to get all candidate assessments
router.get('/get-all-candidate-assessment', candidateAssessmentController.getAllCandidateAssessments);

// Route to get a specific candidate assessment by ID
router.get('/get-one-candidate-assessment/:id', candidateAssessmentController.getCandidateAssessmentById);

// Route to get a candidate assessment by ID with associated planning data
router.get('/get-one-candidate-assessment-associated-planning/:id', candidateAssessmentController.getCandidateAssessmentWithPlanning);

router.put('/update-one/:id', candidateAssessmentController.updateCandidateAssessment);
router.patch('/update-one-partial/:id', candidateAssessmentController.patchCandidateAssessment);

module.exports = router;

//delete left