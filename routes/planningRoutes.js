const express = require('express');
const router = express.Router();
const planningController = require('../controllers/planningController');

router.post('/create', planningController.createPlanning);
router.get('/get-all-only-planning', planningController.getAllPlanning); //planning only without associated data
router.get('/get-all-associations', planningController.getPlanning); //planning data with associated data
router.get('/get-only-planning/:id', planningController.getOnlyPlanningById); //planning data by id without associated data
router.get('/get-planning-associations/:id', planningController.getPlanningById); //planning data by id with associated data 
router.put('/update-one/:id', planningController.updatePlanningWithChildren);
router.patch('/update-one-partial/:id', planningController.patchPlanningWithChildren);
module.exports = router;

//delete left