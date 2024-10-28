const { User } = require("../models/syncTables");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

exports.createUser = async (req, res) => {
  const {
    name,
    email,
    password,
    phone_number,
    position,
    company_name,
    office_address,
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
      phone_number,
      position,
      company_name,
      office_address,
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
    console.log(user);
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
    res.status(201).json({
      status: "Success",
      msg: "User logged in successfully",
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
