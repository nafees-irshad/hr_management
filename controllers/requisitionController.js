const Requisition = require("../models/requisitionModel.js");

// Create a new requisition
// Create a new requisition
exports.createRequisition = async (req, res) => {
    try {
      // Check if a requisition with the same request_id already exists
      const existingRequisition = await Requisition.findOne({
        where: { request_id: req.body.request_id },
      });
  
      if (existingRequisition) {
        return res.status(400).json({ message: "Request ID must be unique" });
      }
  
      // If no requisition with the same request_id, proceed to create a new requisition
      const requisition = await Requisition.create(req.body);
      res.status(201).json(requisition);
    } catch (error) {
      console.error("Error creating requisition:", error);
      res.status(500).json({ message: "Error creating requisition" });
    }
  };
  

// Get all requisitions
exports.getAllRequisitions = async (req, res) => {
  try {
    const requisitions = await Requisition.findAll();
    res.status(200).json(requisitions);
  } catch (error) {
    console.error("Error fetching requisitions:", error);
    res.status(500).json({ message: "Error fetching requisitions" });
  }
};

// Get a single requisition by ID
exports.getRequisitionById = async (req, res) => {
  try {
    const requisition = await Requisition.findByPk(req.params.id);
    if (requisition) {
      res.status(200).json(requisition);
    } else {
      res.status(404).json({ message: "Requisition not found" });
    }
  } catch (error) {
    console.error("Error fetching requisition:", error);
    res.status(500).json({ message: "Error fetching requisition" });
  }
};

// Update a requisition by ID
exports.updateRequisition = async (req, res) => {
  try {
    const [updated] = await Requisition.update(req.body, {
      where: { requisition_id: req.params.id },
    });
    if (updated) {
      const updatedRequisition = await Requisition.findByPk(req.params.id);
      res.status(200).json(updatedRequisition);
    } else {
      res.status(404).json({ message: "Requisition not found" });
    }
  } catch (error) {
    console.error("Error updating requisition:", error);
    res.status(500).json({ message: "Error updating requisition" });
  }
};

// Partially update a requisition by ID
exports.patchRequisition = async (req, res) => {
    try {
      const updated = await Requisition.update(req.body, {
        where: { requisition_id: req.params.id },
        fields: Object.keys(req.body), // Only update fields provided in req.body
      });
  
      if (updated[0]) {
        const updatedRequisition = await Requisition.findByPk(req.params.id);
        res.status(200).json(updatedRequisition);
      } else {
        res.status(404).json({ message: "Requisition not found" });
      }
    } catch (error) {
      console.error("Error updating requisition:", error);
      res.status(500).json({ message: "Error updating requisition" });
    }
  };
  

// Delete a requisition by ID
exports.deleteRequisition = async (req, res) => {
  try {
    const deleted = await Requisition.destroy({
      where: { requisition_id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Requisition not found" });
    }
  } catch (error) {
    console.error("Error deleting requisition:", error);
    res.status(500).json({ message: "Error deleting requisition" });
  }
};
