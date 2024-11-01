const Joi = require("joi");

// Define Joi validation schema for the user model
const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(100).required().messages({
    "string.base": "Name must be a string.",
    "string.empty": "Name cannot be empty.",
    "string.min": "Name must be at least 3 characters.",
    "string.max": "Name must be at most 100 characters.",
    "any.required": "Name is required.",
  }),

  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string.",
    "string.email": "Email must be a valid email address.",
    "string.empty": "Email cannot be empty.",
    "any.required": "Email is required.",
  }),

  password: Joi.string()
    .pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])(?=.{8,})/)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least 8 characters, including one uppercase letter and one special character.",
      "string.empty": "Password cannot be empty.",
      "any.required": "Password is required.",
    }),

  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{7,15}$/)
    .required()
    .messages({
      "string.base": "Phone number must be a string.",
      "string.pattern.base": "Phone number must be valid (e.g., +1234567890).",
      "string.empty": "Phone number cannot be empty.",
      "any.required": "Phone number is required.",
    }),

  position: Joi.string().max(100).required().messages({
    "string.base": "Position must be a string.",
    "string.max": "Position must be at most 100 characters.",
    "string.empty": "Position cannot be empty.",
    "any.required": "Position is required.",
  }),

  companyName: Joi.string().max(100).required().messages({
    "string.base": "Company name must be a string.",
    "string.max": "Company name must be at most 100 characters.",
    "string.empty": "Company name cannot be empty.",
    "any.required": "Company name is required.",
  }),

  officeAddress: Joi.string().max(255).required().messages({
    "string.base": "Office address must be a string.",
    "string.max": "Office address must be at most 255 characters.",
    "string.empty": "Office address cannot be empty.",
    "any.required": "Office address is required.",
  }),
});

const userLoginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string.",
    "string.email": "Email must be a valid email address.",
    "string.empty": "Email cannot be empty.",
    "any.required": "Email is required.",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password cannot be empty.",
    "any.required": "Password is required.",
  }),
});

const changePasswordValidation = Joi.object({
  currentPassword: Joi.string().required().messages({
    "string.empty": "Current password cannot be empty.",
    "any.required": "Current password is required.",
  }),
  newPassword: Joi.string()
    .pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])(?=.{8,})/)
    .required()
    .messages({
      "string.pattern.base":
        "New password must contain at least 8 characters, including one uppercase letter and one special character.",
      "string.empty": "New password cannot be empty.",
      "any.required": "New password is required.",
    }),
});

const updateUserValidation = Joi.object({
  name: Joi.string().min(3).max(100).optional().messages({
    "string.base": "Name must be a string.",
    "string.empty": "Name cannot be empty.",
    "string.min": "Name must be at least 3 characters.",
    "string.max": "Name must be at most 100 characters.",
    "any.required": "Name is required.",
  }),
  email: Joi.string().email().optional().messages({
    "string.base": "Email must be a string.",
    "string.email": "Email must be a valid email address.",
    "string.empty": "Email cannot be empty.",
    "any.required": "Email is required.",
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{7,15}$/)
    .optional()
    .messages({
      "string.base": "Phone number must be a string.",
      "string.pattern.base": "Phone number must be valid (e.g., +1234567890).",
      "string.empty": "Phone number cannot be empty.",
      "any.required": "Phone number is required.",
    }),
  position: Joi.string().max(100).optional().messages({
    "string.base": "Position must be a string.",
    "string.max": "Position must be at most 100 characters.",
    "string.empty": "Position cannot be empty.",
    "any.required": "Position is required.",
  }),
  companyName: Joi.string().max(100).optional().messages({
    "string.base": "Company name must be a string.",
    "string.max": "Company name must be at most 100 characters.",
    "string.empty": "Company name cannot be empty.",
    "any.required": "Company name is required.",
  }),
  officeAddress: Joi.string().max(255).optional().messages({
    "string.base": "Office address must be a string.",
    "string.max": "Office address must be at most 255 characters.",
    "string.empty": "Office address cannot be empty.",
    "any.required": "Office address is required.",
  }),
});

module.exports = {
  userValidationSchema,
  userLoginValidation,
  changePasswordValidation,
  updateUserValidation,
};