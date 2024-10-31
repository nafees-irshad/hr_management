const express = require("express");
const router = express.Router();

// import Middleware
const authenticateUser = require("../middleware/authMiddleware");

//import controllers
const sourcingAndScreeningController = require("../controllers/sourcingAndScreeningController");
//define middleware
router.use("/start", authenticateUser);
//define routes
router.post("/start", sourcingAndScreeningController.startSourcingAndScreening);
module.exports = router;
