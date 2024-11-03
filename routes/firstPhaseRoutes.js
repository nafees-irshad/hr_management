const express = require('express');
const FirstPhaseController = require("../controllers/firstPhaseController");
const router = express.Router();

router.post('/create', FirstPhaseController.createFirstPhase);
router.get('/get-all-first-phase', FirstPhaseController.getAllFirstPhase); //get all first phase records
router.get('/get-one-first-phase/:id', FirstPhaseController.getFirstPhaseById); //get one first phase by id
router.get('/get-one-first-phase-associated-planning/:id', FirstPhaseController.getFirstPhaseWithPlanningById); //get one first phase by id with associated planning data (parent data) 
router.put('/update-one/:id', FirstPhaseController.updateFirstPhase);
router.patch('/update-partial/:id', FirstPhaseController.patchFirstPhase);

module.exports = router;

//delete left