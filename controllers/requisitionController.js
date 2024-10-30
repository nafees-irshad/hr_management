const { Transaction } = require("sequelize");
const Requisition = require("../models/requisitionModel.js");
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

// Delete a requisition by ID
exports.deleteRequisition = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const deleted = await Requisition.destroy({
      where: { requisition_id: req.params.id },
      transaction,
    });

    if (!deleted) {
      await transaction.rollback();
      return responseHandler(res, 404, null, "Requisition not found");
    }

    await transaction.commit();
    responseHandler(res, 204, null, `Requisition deleted successfully for ID: ${req.params.id}`);
  } catch (error) {
    await transaction.rollback();
    console.error("Error deleting requisition:", error);
    responseHandler(res, 500, null, "Error deleting requisition");
  }
};

// Delete all requisitions
exports.deleteAllRequisitions = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    await Requisition.destroy({
      where: {},
      truncate: true,
      transaction,
    });
    await transaction.commit();
    responseHandler(res, 200, null, "All requisitions deleted successfully");
  } catch (error) {
    await transaction.rollback();
    console.error("Error deleting all requisitions:", error);
    responseHandler(res, 500, null, "Error deleting all requisitions");
  }
};
