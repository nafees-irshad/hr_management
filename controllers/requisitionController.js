const { Transaction } = require("sequelize");
const Requisition = require("../models/requisitionModel.js");
const HiringProcess = require("../models/hiringProcessModel.js");
const requisitionSchema = require("../validations/requisitionValidation.js"); 
const sequelize = require("../config/db.js");

// Utility function for consistent responses
const responseHandler = (res, status, data, message = null) => {
  res.status(status).json({ data, message });
};

// Create a new requisition
exports.createRequisition = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
      // Validate the request body
      const { error } = requisitionSchema.validate(req.body);
      if (error) {
          return responseHandler(res, 400, null, `Validation Error: ${error.details[0].message}`);
      }

      const { request_id } = req.body;

      // Check if a requisition with the same request_id already exists
      const existingRequisition = await Requisition.findOne({
          where: { request_id },
          transaction,
      });

      if (existingRequisition) {
          return responseHandler(res, 400, null, "Request ID must be unique");
      }

      // Create a new requisition within a transaction
      const requisition = await Requisition.create(req.body, { transaction });
      await transaction.commit();
      responseHandler(res, 201, requisition, "Requisition created successfully");
  } catch (error) {
      await transaction.rollback();
      console.error("Error creating requisition:", error);
      responseHandler(res, 500, null, "Error creating requisition");
  }
};

// Get all requisitions
exports.getAllRequisitions = async (req, res) => {
  try {
    const requisitions = await Requisition.findAll();
    responseHandler(res, 200, requisitions, "Fetched all requisitions");
  } catch (error) {
    console.error("Error fetching requisitions:", error);
    responseHandler(res, 500, null, "Error fetching requisitions");
  }
};

// Get a single requisition by ID
exports.getRequisitionById = async (req, res) => {
  try {
    const requisition = await Requisition.findByPk(req.params.id);
    if (!requisition) {
      return responseHandler(res, 404, null, "Requisition not found");
    }
    responseHandler(res, 200, requisition, `Fetched requisition by ID: ${req.params.id}`);
  } catch (error) {
    console.error("Error fetching requisition:", error);
    responseHandler(res, 500, null, "Error fetching requisition");
  }
};


// Get requisitions by hired status
exports.getRequisitionsByHired = async (req, res) => {
  try {
      const requisitions = await Requisition.findAll({
          where: { status: 'hired' }
      });
      res.json(requisitions);
  } catch (error) {
      console.error("Error fetching requisitions by status 'hired':", error);
      res.status(500).json({ error: "An error occurred while fetching requisitions." });
  }
};

// Get requisitions by ongoing status
exports.getRequisitionsByOngoing = async (req, res) => {
  try {
      const requisitions = await Requisition.findAll({
          where: { status: 'ongoing' }
      });
      res.json(requisitions);
  } catch (error) {
      console.error("Error fetching requisitions by status 'ongoing':", error);
      res.status(500).json({ error: "An error occurred while fetching requisitions." });
  }
};

// Get requisitions by paused status
exports.getRequisitionsByPaused = async (req, res) => {
  try {
      const requisitions = await Requisition.findAll({
          where: { status: 'paused' }
      });
      res.json(requisitions);
  } catch (error) {
      console.error("Error fetching requisitions by status 'paused':", error);
      res.status(500).json({ error: "An error occurred while fetching requisitions." });
  }
};

// Get requisitions by in-review status
exports.getRequisitionsByInReview = async (req, res) => {
  try {
      const requisitions = await Requisition.findAll({
          where: { status: 'in-review' }
      });
      res.json(requisitions);
  } catch (error) {
      console.error("Error fetching requisitions by status 'in-review':", error);
      res.status(500).json({ error: "An error occurred while fetching requisitions." });
  }
};

// Get requisitions by to-publish status
exports.getRequisitionsByToPublish = async (req, res) => {
  try {
      const requisitions = await Requisition.findAll({
          where: { status: 'to publish' }
      });
      res.json(requisitions);
  } catch (error) {
      console.error("Error fetching requisitions by status 'to publish':", error);
      res.status(500).json({ error: "An error occurred while fetching requisitions." });
  }
};

// Get requisitions by cancelled status
exports.getRequisitionsByCancelled = async (req, res) => {
  try {
      const requisitions = await Requisition.findAll({
          where: { status: 'cancelled' }
      });
      res.json(requisitions);
  } catch (error) {
      console.error("Error fetching requisitions by status 'cancelled':", error);
      res.status(500).json({ error: "An error occurred while fetching requisitions." });
  }
};

// Get requisitions by denied status
exports.getRequisitionsByDenied = async (req, res) => {
  try {
      const requisitions = await Requisition.findAll({
          where: { status: 'denied' }
      });
      res.json(requisitions);
  } catch (error) {
      console.error("Error fetching requisitions by status 'denied':", error);
      res.status(500).json({ error: "An error occurred while fetching requisitions." });
  }
};

// Get requisitions by onboarding status
exports.getRequisitionsByOnboarding = async (req, res) => {
  try {
      const requisitions = await Requisition.findAll({
          where: { status: 'onboarding' }
      });
      res.json(requisitions);
  } catch (error) {
      console.error("Error fetching requisitions by status 'onboarding':", error);
      res.status(500).json({ error: "An error occurred while fetching requisitions." });
  }
};

// Get requisitions by closed status
exports.getRequisitionsByClosed = async (req, res) => {
  try {
      const requisitions = await Requisition.findAll({
          where: { status: 'closed' }
      });
      res.json(requisitions);
  } catch (error) {
      console.error("Error fetching requisitions by status 'closed':", error);
      res.status(500).json({ error: "An error occurred while fetching requisitions." });
  }
};


// Update a requisition by ID
exports.updateRequisition = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
      // Validate the request body
      const { error } = requisitionSchema.validate(req.body, { allowUnknown: true }); // Allow unknown keys
      if (error) {
          return responseHandler(res, 400, null, `Validation Error: ${error.details[0].message}`);
      }

      const [updated] = await Requisition.update(req.body, {
          where: { requisition_id: req.params.id },
          transaction,
      });

      if (!updated) {
          await transaction.rollback();
          return responseHandler(res, 404, null, "Requisition not found");
      }

      const updatedRequisition = await Requisition.findByPk(req.params.id, { transaction });
      await transaction.commit();
      responseHandler(res, 200, updatedRequisition, `Requisition updated successfully for ID: ${req.params.id}`);
  } catch (error) {
      await transaction.rollback();
      console.error("Error updating requisition:", error);
      responseHandler(res, 500, null, "Error updating requisition");
  }
};

// Partially update a requisition by ID
exports.patchRequisition = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const [updated] = await Requisition.update(req.body, {
      where: { requisition_id: req.params.id },
      fields: Object.keys(req.body), // Only update fields provided in req.body
      transaction,
    });

    if (!updated) {
      await transaction.rollback();
      return responseHandler(res, 404, null, "Requisition not found");
    }

    const updatedRequisition = await Requisition.findByPk(req.params.id, { transaction });
    await transaction.commit();
    responseHandler(res, 200, updatedRequisition, "Requisition partially updated");
  } catch (error) {
    await transaction.rollback();
    console.error("Error updating requisition:", error);
    responseHandler(res, 500, null, "Error updating requisition");
  }
};

// Delete a requisition by ID and its associated hiring process
exports.deleteRequisition = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    // Find the requisition to delete
    const requisition = await Requisition.findByPk(req.params.id, { transaction });
    if (!requisition) {
      return responseHandler(res, 404, null, "Requisition not found");
    }

    // Find the associated hiring processes
    const hiringProcesses = await HiringProcess.findAll({
      where: { requisition_id: req.params.id }, // Adjust this if your foreign key is named differently
      transaction,
    });

    // Delete the associated hiring processes if they exist
    if (hiringProcesses.length > 0) {
      await HiringProcess.destroy({
        where: { requisition_id: req.params.id }, // This deletes all hiring processes associated with the requisition
        transaction,
      });
    }

    // Delete the requisition
    const deletedRequisition = await Requisition.destroy({
      where: { requisition_id: req.params.id },
      transaction,
    });

    if (!deletedRequisition) {
      return responseHandler(res, 404, null, "Requisition not found");
    }

    await transaction.commit();
    return responseHandler(res, 204, null, `Requisition and associated hiring processes deleted successfully for ID: ${req.params.id}`);
  } catch (error) {
    await transaction.rollback();
    console.error("Error deleting requisition:", error);
    return responseHandler(res, 500, null, "Error deleting requisition");
  }
};

// Delete all requisitions
exports.deleteAllRequisitions = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    // Find all associated hiring processes before deleting requisitions
    const hiringProcesses = await HiringProcess.findAll({
      where: {}, // Adjust if necessary
      transaction,
    });

    // Delete all associated hiring processes first
    if (hiringProcesses.length > 0) {
      await HiringProcess.destroy({
        where: {}, // This will delete all hiring processes
        transaction,
      });
    }

    // Now delete all requisitions
    await Requisition.destroy({
      where: {}, // This will delete all requisitions
      transaction,
    });

    await transaction.commit();
    return responseHandler(res, 200, null, "All requisitions and associated hiring processes deleted successfully");
  } catch (error) {
    await transaction.rollback();
    console.error("Error deleting all requisitions:", error);
    return responseHandler(res, 500, null, "Error deleting all requisitions");
  }
};

