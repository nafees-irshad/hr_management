const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); // Adjust the path to your User model
// require("dotenv").config();

const authenticateUser = async (req, res, next) => {
  try {
    // Get the 'authorization' header from the request
    const { authorization } = req.headers;

    // Check if the authorization header is present and starts with 'Bearer'
    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res.status(401).json({
        status: "failed",
        message: "Unauthorized user. No token provided.",
      });
    }

    // Extract the token from the header
    const token = authorization.split(" ")[1];

    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Extract user ID from the decoded token
    const userId = decoded.id;

    // Fetch the user from the database using the user ID
    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password"] }, // Exclude password from the response
    });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }

    // Attach the user object to the request object
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    console.error("Error in authentication middleware:", err);
    return res.status(401).json({
      status: "failed",
      message: "Authentication failed. Invalid or expired token.",
    });
  }
};

module.exports = authenticateUser;