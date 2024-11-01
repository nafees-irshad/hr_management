const express = require('express');
const candidateAssessmentController = require('../controllers/candidateAssessmentController');
const router = express.Router();

router.post('/create', candidateAssessmentController.createCandidateAssessment);

module.exports = router;
