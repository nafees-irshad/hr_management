const express = require("express");
const sequelize = require("./config/db.js");
require("dotenv").config();
//import routes
const userRoutes = require("./routes/userRoutes.js");
//SourcingAndScreening routes
const sourcingAndScreeningRoutes = require("./routes/sourcingAndScreeningRoutes.js");

const app = express();

// Middleware for parsing JSON
app.use(express.json());

//user routes
app.use("/api/user", userRoutes);

//use SourcingAndScreening
app.use("/api/sourcing-and-screening", sourcingAndScreeningRoutes);

const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
