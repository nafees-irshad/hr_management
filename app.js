const express = require("express");
const sequelize = require("./config/db.js");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes.js");
const requisitionRoutes = require("./routes/requisitionRoutes.js");
const hiringProcessRoutes = require("./routes/hiringProcessRoutes");
const planningRoutes = require('./routes/planningRoutes.js');
const FirstPhaseRoutes = require('./routes/firstPhaseRoutes.js');
const candidateAssessmentRoutes = require('./routes/candidateAssesmentRoutes.js')
const budgetRoutes = require('./routes/budgetRoutes.js')
const approvalRoutes = require('./routes/approvalRoutes.js')
const app = express();

// Middleware for parsing JSON
app.use(express.json());

//routes
app.use("/api/user", userRoutes);
app.use("/api/requisitions", requisitionRoutes); 
app.use("/api/hiring-processes", hiringProcessRoutes);
app.use('/api/planning', planningRoutes);
app.use('/api/first-phase', FirstPhaseRoutes);
app.use('/api/candidate-assessment', candidateAssessmentRoutes)
app.use('/api/budget', budgetRoutes)
app.use('/api/approval', approvalRoutes)


const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
