/** @format */

const express = require('express');
const sequelize = require('./config/db.js');
require('dotenv').config();
//import routes
const userRoutes = require('./routes/userRoutes.js');
const requisitionRoutes = require('./routes/requisitionRoutes');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

//use user routes
app.use('/api/user', userRoutes);

//requisition routes
app.use('api/requisition', requisitionRoutes);

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
