const sequelize = require("../config/db.js");
const User = require("../models/userModel.js");
const Requisition = require("../models/requisitionModel.js");
const HiringProcess = require("../models/hiringProcessModel.js");
const Planning = require('../models/planningModel.js');
const FirstPhase = require('../models/firstPhaseModel.js');
const CandidateAssessments = require('../models/candidateAssessmentModel.js');
const Budget = require('../models/budgetModel.js');
const Approval = require('../models/approvalModel.js');

require("../models/associations.js"); 

sequelize
  .sync({ alter: true})
  .then(() => {
    console.log("All tables synced successfully");
  })
  .catch((err) => {
    console.error("Error syncing tables", err);
  });

module.exports = {sequelize, 
  User,
  Requisition, 
  HiringProcess, 
  Planning,
  FirstPhase,
  CandidateAssessments,
  Budget,
  Approval };
