const express = require("express");
const router = express.Router();

//import controller function
const userController = require("../controllers/userController");

//define routes
router.post("/register", userController.createUser);

module.exports = router;
