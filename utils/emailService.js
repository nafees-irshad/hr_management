const nodemailer = require("nodemailer");

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Use the correct SMTP host for your email provider
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: "pescqtihzlxnzlwc",
  },
});

module.exports = transporter;