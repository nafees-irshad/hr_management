const express = require("express");
const router = express.Router();
const hiringProcessController = require("../controllers/hiringProcessController");
const authenticateUser = require("../middleware/authMiddleware");

// Create a new hiring process
router.post("/create", authenticateUser, hiringProcessController.createHiringProcess);

// Get all hiring processes
router.get("/get-all", authenticateUser, hiringProcessController.getAllHiringProcesses);

// Get a hiring process by ID
router.get("/get-one/:id", authenticateUser, hiringProcessController.getHiringProcessById);

// Update a hiring process by ID (PUT)
router.put("/update-one/:id", authenticateUser, hiringProcessController.updateHiringProcessById);

// Update a hiring process by ID (PATCH)
router.patch("/update-one-partial/:id", authenticateUser, hiringProcessController.patchHiringProcessById);

// Delete a hiring process by ID
router.delete("/delete-one/:id", authenticateUser, hiringProcessController.deleteHiringProcessById);

// DELETE all hiring processes
router.delete("/delete-all", authenticateUser, hiringProcessController.deleteAllHiringProcesses);

module.exports = router;
