const express = require("express");
const router = express.Router();

// Import middleware
const authenticateUser = require("../middleware/authMiddleware");

// Import controllers
const interviewAndSelectionController = require("../controllers/interviewAndSelectionController");

//define routes
//start InterviewAndSelection
router.post(
  "/start",
  authenticateUser,
  interviewAndSelectionController.startInterviewAndSelection
);

//update question
router.put(
  "/update/:jobId/:questionId",
  authenticateUser,
  interviewAndSelectionController.updateQuestionById
);

//get question
router.get(
  "/:jobId/:questionId",
  authenticateUser,
  interviewAndSelectionController.getQuestionsbyId
);
//get all questions
router.get(
  "/:jobId",
  authenticateUser,
  interviewAndSelectionController.getAllQuestions
);

//delet question
router.delete(
  "/:jobId/:questionId",
  authenticateUser,
  interviewAndSelectionController.deleteQuestion
);
module.exports = router;
