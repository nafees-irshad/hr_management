const express = require("express");
const sequelize = require("./config/db.js");
require("dotenv").config();
//import routes
const userRoutes = require("./routes/userRoutes.js");
//SourcingAndScreening routes
const sourcingAndScreeningRoutes = require("./routes/sourcingAndScreeningRoutes.js");
//requisition Routes
const requisitionRoutes = require("./routes/requisitionRoutes.js");
//hiringProcessRoutes
const hiringProcessRoutes = require("./routes/hiringProcessRoutes");

//InterviewAndSelection routes
const interviewAndSelectionRoutes = require("./routes/interviewAndSelectionRoutes.js");

const app = express();

// Middleware for parsing JSON
app.use(express.json());

//use user routes
app.use("/api/user", userRoutes);

//routes
app.use("/api/requisitions", requisitionRoutes);
app.use("/api/hiring-processes", hiringProcessRoutes);

//use SourcingAndScreening
app.use("/api/sourcing-and-screening", sourcingAndScreeningRoutes);

//use InterviewAndSelection
app.use("/api/Interview-and-selection", interviewAndSelectionRoutes);

const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
