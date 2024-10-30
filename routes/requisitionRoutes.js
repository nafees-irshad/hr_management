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

// Delete all requisitions
router.delete("/delete-all", requisitionController.deleteAllRequisitions);

// Define individual routes for each status
router.get("/status/hired", requisitionController.getRequisitionsByHired);
router.get("/status/ongoing", requisitionController.getRequisitionsByOngoing);
router.get("/status/paused", requisitionController.getRequisitionsByPaused);
router.get("/status/in-review", requisitionController.getRequisitionsByInReview);
router.get("/status/to-publish", requisitionController.getRequisitionsByToPublish);
router.get("/status/cancelled", requisitionController.getRequisitionsByCancelled);
router.get("/status/denied", requisitionController.getRequisitionsByDenied);
router.get("/status/onboarding", requisitionController.getRequisitionsByOnboarding);
router.get("/status/closed", requisitionController.getRequisitionsByClosed);

module.exports = router;
