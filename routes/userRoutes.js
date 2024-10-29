const express = require("express");

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const router = express.Router();
// Email verification route
// Email verification route
router.get("/users/verify-email", async (req, res) => {
  const { token } = req.query;
  console.log(token);

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Update the user's verification status
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    user.isVerified = true;
    await user.save();

    res.status(200).json({ msg: "Email verified successfully!" });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(400).json({ msg: "Invalid or expired token" });
  }
});
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
