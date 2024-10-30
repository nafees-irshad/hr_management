const express = require("express");
const router = express.Router();
const hiringProcessController = require("../controllers/hiringProcessController");

// Create a new hiring process
router.post("/create", hiringProcessController.createHiringProcess);

// Get all hiring processes
router.get("/get-all", hiringProcessController.getAllHiringProcesses);

// Get a hiring process by ID
router.get("/get-one/:id", hiringProcessController.getHiringProcessById);

// Update a hiring process by ID (PUT)
router.put("/update-one/:id", hiringProcessController.updateHiringProcessById);

// Update a hiring process by ID (PATCH)
router.patch("/update-one-partial/:id", hiringProcessController.patchHiringProcessById);

// Delete a hiring process by ID
router.delete("/delete-one/:id", hiringProcessController.deleteHiringProcessById);

// DELETE all hiring processes
router.delete("/delete-all", hiringProcessController.deleteAllHiringProcesses);

module.exports = router;
