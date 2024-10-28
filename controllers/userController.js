const User = require("../models/syncTables");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
    const existingUser = await User.findOne({ email });
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
