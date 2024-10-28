const express = require("express");
const sequelize = require("./config/db.js");
require("dotenv").config();
//import routes
const userRoutes = require("./routes/userRoutes.js");
const requisitionRoutes = require("./routes/requisitionRoutes.js");
const app = express();

// Middleware for parsing JSON
app.use(express.json());

//user routes
app.use("/api/user", userRoutes);
app.use("/api/requisitions", requisitionRoutes); // Mount the requisition routes


const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
