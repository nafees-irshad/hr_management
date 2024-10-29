const { User } = require("../models/syncTables");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

exports.createUser = async (req, res) => {
  const {
    name,
    email,
    password,
    phoneNumber,
    position,
    companyName,
    officeAddress,
  } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      phoneNumber,
      position,
      companyName,
      officeAddress,
    });
    //Saving User Details
    await newUser.save();
    res.status(201).json({
      status: "Success",
      msg: "User created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: "Error in registration",
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({
      where: { email },
    });
    // console.log(user);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    //generate token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });
    // console.log(token);
    res.status(201).json({
      status: "Success",
      message: "Login successful",
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: "Login Error",
    });
  }
};

exports.changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const { id } = req.user; // Assuming user has access to user ID in req.user
  try {
    //Find user
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    //Check old password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid old password" });
    }
    //Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);
    //Update password
    user.password = hashPassword;
    await user.save();
    res.status(200).json({ msg: "Password changed successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: "Login Error",
    });
  }
};
exports.updateUserFields = async (req, res) => {
  const userId = req.user.id; // Get userId from the token
  const updates = req.body; // Get fields to update from request body
  try {
    // Find the user by ID
    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "User not found" });
    }

    // Update user fields dynamically based on the request body
    await user.update(updates);

    const userResponse = user.get({ plain: true }); // Convert user instance to plain object
    delete userResponse.password; // Remove the password field
    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      data: userResponse,
    });
  } catch (err) {
    console.error("Error updating user:", err);
    res
      .status(500)
      .json({ status: "failed", message: "Internal server error" });
  }
};

exports.getUserDetails = async (req, res) => {
  const userId = req.user.id; // Get userId from the token
  try {
    // Find the user by ID
    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password"] }, // Exclude password field
    });
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error getting user details:", err);
    res
      .status(500)
      .json({ status: "failed", message: "Internal server error" });
  }
};
