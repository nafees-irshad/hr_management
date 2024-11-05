const HiringProcess = require("./hiringProcessModel");
const Requisition = require("./requisitionModel");

// Define associations
Requisition.hasMany(HiringProcess, {
  foreignKey: 'requisition_id',  // Foreign key in HiringProcess
  sourceKey: 'requisition_id',    // Primary key in Requisition
});

HiringProcess.belongsTo(Requisition, {
  foreignKey: 'requisition_id',  // Foreign key in HiringProcess
  targetKey: 'requisition_id',    // Primary key in Requisition
});
