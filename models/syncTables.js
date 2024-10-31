const sequelize = require("../config/db.js");
const User = require("../models/userModel.js");
const sourcingAndScreening = require("../models/sourcingAndScreeningModel.js");
// const questionType = require("../models/questionTypeModel.js");
sequelize
  .sync({ alter: false })
  .then(() => {
    console.log("All tables synced successfully");
  })
  .catch((err) => {
    console.error("Error syncing tables", err);
  });

module.exports = { User, sourcingAndScreening, sequelize };
