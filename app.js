const express = require("express");
const sequelize = require("./config/db.js");
require("dotenv").config();
const requisitionRoutes = require("./routes/requisitionRoutes.js");
const hiringProcessRoutes = require("./routes/hiringProcessRoutes");

const app = express();

// Middleware for parsing JSON
app.use(express.json());

//routes
app.use("/api/requisitions", requisitionRoutes); 
app.use("/api/hiring-processes", hiringProcessRoutes);


const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
