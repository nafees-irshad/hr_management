const express = require("express");
const router = express.Router();

const authenticateUser = require("../middleware/authMiddleware");

// Import routes
const hiringController = require("../controllers/hiringController");

router.post("/create", authenticateUser, hiringController.offerLetter);

module.exports = router;
