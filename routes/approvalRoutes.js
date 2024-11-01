const express = require('express');
const approvalController  = require('../controllers/approvalController');
const router = express.Router();

router.post('/create', approvalController.createApproval);

module.exports = router;
