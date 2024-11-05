const express = require("express");
const router = express.Router();

// import Middleware
const authenticateUser = require("../middleware/authMiddleware");

//import controllers
const sourcingAndScreeningController = require("../controllers/sourcingAndScreeningController");
//define middleware
router.use("/start", authenticateUser);
router.use("/update", authenticateUser);
router.use("/delete", authenticateUser);
//define routes
//create question
router.post("/start", sourcingAndScreeningController.startSourcingAndScreening);

//update question
router.put(
  "/update/:jobId/:questionId",
  sourcingAndScreeningController.updateQuestionById
);

//delete question
router.delete(
  "/delete/:jobId/:questionId",
  sourcingAndScreeningController.deleteQuestion
);
//get question data
router.get(
  "/:jobId",
  authenticateUser,
  sourcingAndScreeningController.getAllQuestion
);

//get question data by id
router.get(
  "/:jobId/:questionId",
  authenticateUser,
  sourcingAndScreeningController.getQuestionById
);

module.exports = router;
