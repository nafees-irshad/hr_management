const sequelize = require("../config/db.js");
const User = require("./userModel.js");
const SourcingAndScreening = require("./sourcingAndScreeningModel.js");
const Requisition = require("./requisitionModel.js");
const HiringProcess = require("./hiringProcessModel.js");
const InterviewAndSelection = require("./interviewAndSelectionModel.js");
const Hiring = require("./hiredModel.js");

require("../models/associations.js");

sequelize
  .sync({ alter: false })
  .then(() => {
    console.log("All tables synced successfully");
  })
  .catch((err) => {
    console.error("Error syncing tables", err);
  });

module.exports = {
  User,
  SourcingAndScreening,
  Requisition,
  HiringProcess,
  InterviewAndSelection,
  Hiring,
  sequelize,
};
