const express = require("express");
const router = express.Router();

// import Middleware
const authenticateUser = require("../middleware/authMiddleware");

//import validators
const {
  validateSignUp,
  validateLogin,
  validateChangePassword,
  validateUpdateUser,
} = require("../validations/userValidator");
//import controller function
const userController = require("../controllers/userController");

//define middleware
router.use("/change-password", authenticateUser);
router.use("/update-profile", authenticateUser);
router.use("/view-profile", authenticateUser);

//public routes
router.post("/register", validateSignUp, userController.createUser);
router.post("/login", validateLogin, userController.loginUser);

//protected routes
router.post(
  "/change-password",
  validateChangePassword,
  userController.changePassword
);
router.put(
  "/update-profile",
  validateUpdateUser,
  userController.updateUserFields
);

router.get("/view-profile", userController.getUserDetails);

module.exports = router;
