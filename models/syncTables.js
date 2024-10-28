const sequelize = require("../config/db.js");
const User = require("../models/userModel.js");

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("All tables synced successfully");
  })
  .catch((err) => {
    console.error("Error syncing tables", err);
  });

module.exports = { User, sequelize };
