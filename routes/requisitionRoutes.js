/** @format */

const express = require('express');
const router = express.Router();

//import contorters
const requisitionController = require('../controllers/requisitionController');
// routes for requisition
router.post('/new-requisition', requisitionController.createRequisition);

module.exports = router;
