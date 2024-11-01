const {
    userValidationSchema,
    userLoginValidation,
    changePasswordValidation,
    updateUserValidation,
  } = require("./userValidations");
  // Middleware for validating signup data using Joi
  const validateSignUp = async (req, res, next) => {
    try {
      // Validate the request body using Joi schema
      const value = await userValidationSchema.validateAsync(req.body, {
        abortEarly: false,
      });
  
      // If validation passes, proceed to the next middleware or controller
      next();
    } catch (error) {
      // Check if the error is a Joi validation error
      if (error.isJoi) {
        return res.status(400).json({
          status: "failed",
          message: "Validation error",
          message: error.details[0].message,
        });
      }
  
      // Handle other types of errors (e.g., internal server errors)
      res
        .status(500)
        .json({ status: "failed", message: "Internal server error" });
    }
  };
  
  const validateLogin = async (req, res, next) => {
    try {
      const value = await userLoginValidation.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      if (error.isJoi) {
        return res.status(400).json({
          status: "failed",
          message: "Validation error",
          message: error.details[0].message,
        });
      }
      res
        .status(500)
        .json({ status: "failed", message: "Internal server error" });
    }
  };
  
  const validateChangePassword = async (req, res, next) => {
    try {
      const value = await changePasswordValidation.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      if (error.isJoi) {
        return res.status(400).json({
          status: "failed",
          message: "Validation error",
          message: error.details[0].message,
        });
      }
      res
        .status(500)
        .json({ status: "failed", message: "Internal server error" });
    }
  };
  
  const validateUpdateUser = async (req, res, next) => {
    try {
      const value = await updateUserValidation.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      if (error.isJoi) {
        return res.status(400).json({
          status: "failed",
          message: "Validation error",
          message: error.details[0].message,
        });
      }
      res
        .status(500)
        .json({ status: "failed", message: "Internal server error" });
    }
  };
  
  module.exports = {
    validateSignUp,
    validateLogin,
    validateChangePassword,
    validateUpdateUser,
  };