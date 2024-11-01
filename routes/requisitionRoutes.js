const express = require("express");
const router = express.Router();
const requisitionController = require("../controllers/requisitionController.js");
const authenticateUser = require("../middleware/authMiddleware");

// Create a new requisition
router.post("/create", authenticateUser, requisitionController.createRequisition);

// Get all requisitions
router.get("/get-all", authenticateUser, requisitionController.getAllRequisitions);

// Get a single requisition by ID
router.get("/get-one/:id", authenticateUser, requisitionController.getRequisitionById);

// Update a requisition by ID
router.put("/update-one/:id", authenticateUser, requisitionController.updateRequisition);

// Partially update a requisition by ID
router.patch("/update-one-partial/:id",authenticateUser, requisitionController.patchRequisition);

// Delete a requisition by ID
router.delete("/delete-one/:id", authenticateUser, requisitionController.deleteRequisition);

// Delete all requisitions
router.delete("/delete-all", authenticateUser, requisitionController.deleteAllRequisitions);

// Define individual routes for each status
router.get("/status/hired", authenticateUser, requisitionController.getRequisitionsByHired);
router.get("/status/ongoing", authenticateUser,requisitionController.getRequisitionsByOngoing);
router.get("/status/paused", authenticateUser, requisitionController.getRequisitionsByPaused);
router.get("/status/in-review", authenticateUser, requisitionController.getRequisitionsByInReview);
router.get("/status/to-publish", authenticateUser, requisitionController.getRequisitionsByToPublish);
router.get("/status/cancelled", authenticateUser, requisitionController.getRequisitionsByCancelled);
router.get("/status/denied", authenticateUser, requisitionController.getRequisitionsByDenied);
router.get("/status/onboarding", authenticateUser, requisitionController.getRequisitionsByOnboarding);
router.get("/status/closed", authenticateUser, requisitionController.getRequisitionsByClosed);

module.exports = router;
