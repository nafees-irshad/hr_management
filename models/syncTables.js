const sequelize = require("../config/db.js");
const User = require("../models/userModel.js");
const Requisition = require("../models/requisitionModel.js");
const HiringProcess = require("../models/hiringProcessModel.js");

require("../models/associations.js"); 

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("All tables synced successfully");
  })
  .catch((err) => {
    console.error("Error syncing tables", err);
  });

module.exports = { User, Requisition, HiringProcess, sequelize };
