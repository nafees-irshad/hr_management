const HiringProcess = require("../models/hiringProcessModel.js");
const Requisition = require("../models/requisitionModel.js");

// Create a new hiring process
exports.createHiringProcess = async (req, res) => {
  try {
    const { requisition_id, job_title, department, created_by } = req.body; // Include created_by if it's required

    // Check if requisition exists
    const requisition = await Requisition.findByPk(requisition_id);
    if (!requisition) {
      return res.status(404).json({ message: "Requisition not found" });
    }
    console.log(requisition);
    // Create the hiring process, including created_by and created_on
    const newHiringProcess = await HiringProcess.create({
      requisition_id,
      job_title,
      department,
      created_by, // Add created_by field if it exists in the request
      created_on: new Date(), // Set created_on to the current date and time
    });

    return res.status(201).json(newHiringProcess);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get all hiring processes
exports.getAllHiringProcesses = async (req, res) => {
  try {
    const hiringProcesses = await HiringProcess.findAll({
      include: {
        model: Requisition,
        attributes: ["request_id"], // Include any other requisition fields if needed
      },
    });
    return res.status(200).json(hiringProcesses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get hiring process by ID
exports.getHiringProcessById = async (req, res) => {
  try {
    const hiringProcess = await HiringProcess.findByPk(req.params.id, {
      include: {
        model: Requisition,
        attributes: ["request_id"],
      },
    });
    if (!hiringProcess) {
      return res.status(404).json({ message: "Hiring process not found" });
    }
    return res.status(200).json(hiringProcess);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update hiring process by ID
exports.updateHiringProcessById = async (req, res) => {
  try {
    const { job_title, department } = req.body;
    const hiringProcess = await HiringProcess.findByPk(req.params.id);

    if (!hiringProcess) {
      return res.status(404).json({ message: "Hiring process not found" });
    }

    // Update fields only if provided
    hiringProcess.job_title = job_title || hiringProcess.job_title;
    hiringProcess.department = department || hiringProcess.department;

    await hiringProcess.save();
    return res.status(200).json(hiringProcess);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update a hiring process by ID (PATCH)
exports.patchHiringProcessById = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    // Find the hiring process by ID
    const hiringProcess = await HiringProcess.findByPk(id);
    if (!hiringProcess) {
      return res.status(404).json({ message: "Hiring process not found" });
    }

    // Update the hiring process with the provided fields
    await hiringProcess.update(updates); // Sequelize will automatically handle partial updates

    return res
      .status(200)
      .json({ message: "Hiring process updated successfully", hiringProcess });
  } catch (error) {
    console.error("Error updating hiring process:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Delete hiring process by ID
exports.deleteHiringProcessById = async (req, res) => {
  try {
    const hiringProcess = await HiringProcess.findByPk(req.params.id);
    if (!hiringProcess) {
      return res.status(404).json({ message: "Hiring process not found" });
    }

    await hiringProcess.destroy();
    return res.status(204).send(); // No content returned
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete all hiring processes
exports.deleteAllHiringProcesses = async (req, res) => {
  try {
    const deletedCount = await HiringProcess.destroy({
      where: {}, // Empty where clause to delete all records
    });

    return res.status(204).send(); // No content returned
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
