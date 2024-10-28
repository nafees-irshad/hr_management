const express = require("express");
const router = express.Router();
const requisitionController = require("../controllers/requisitionController.js");

// Create a new requisition
router.post("/create", requisitionController.createRequisition);

// Get all requisitions
router.get("/get-all", requisitionController.getAllRequisitions);

// Get a single requisition by ID
router.get("/get-one/:id", requisitionController.getRequisitionById);

// Update a requisition by ID
router.put("/update-one/:id", requisitionController.updateRequisition);

// Partially update a requisition by ID
router.patch("/update-one-partial/:id", requisitionController.patchRequisition);

// Delete a requisition by ID
router.delete("/delete-one/:id", requisitionController.deleteRequisition);

module.exports = router;
