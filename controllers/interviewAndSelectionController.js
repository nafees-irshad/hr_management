const InterviewAndSelection = require("../models/interviewAndSelectionModel");

// start InterviewAndSelection
exports.startInterviewAndSelection = async (req, res) => {
  const { jobId, question, questionType, questionData, preferredAnswer } =
    req.body;
  try {
    const newQuestion = new InterviewAndSelection({
      userId: req.user.id,
      jobId,
      question,
      questionType,
      questionData,
      preferredAnswer,
    });
    await newQuestion.save();
    res.status(201).json({ message: "Question created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create question" });
  }
};

//update InterviewAndSelection
exports.updateQuestionById = async (req, res) => {
  const { jobId, questionId } = req.params; // Assuming questionId is passed as a route parameter
  const { question, questionType, questionData, preferredAnswer } = req.body;

  try {
    // Prepare fields to update based on question type
    let updatedFields = {
      question,
      questionType,
    };

    if (questionType === "Short Answer") {
      // Set additional fields to null for short answer
      updatedFields.questionData = questionData;
      updatedFields.preferredAnswer = null;
    }
    if (questionType === "Paragraph") {
      // Set fields for paragraph
      updatedFields.questionData = questionData;
      updatedFields.preferredAnswer = null;
    }
    if (questionType === "Multiple Choice") {
      // Set fields for multiple choice
      updatedFields.questionData = questionData;
      updatedFields.preferredAnswer = preferredAnswer;
    }
    if (questionType === "Dropdwn") {
      // Set fields for dropdown
      updatedFields.questionData = questionData;
      updatedFields.preferredAnswer = preferredAnswer;
    }
    if (questionType === "Yes/No") {
      // Set fields for yes/no
      updatedFields.questionData = questionData;
      updatedFields.preferredAnswer = preferredAnswer;
    }
    if (questionType === "Date") {
      // Set fields for date
      updatedFields.questionData = questionData;
      updatedFields.preferredAnswer = preferredAnswer;
    }

    // Directly update the record without retrieving it first
    const [updatedRows] = await InterviewAndSelection.update(updatedFields, {
      where: { id: questionId },
      returning: true,
    });
    if (updatedRows === 0) {
      return res
        .status(404)
        .json({ message: "Question not found or no changes made" });
    }
    const updatedQuestion = await InterviewAndSelection.findByPk(questionId);

    res.status(200).json({
      message: "Question updated successfully",
      data: updatedQuestion,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update question" });
  }
};

//get InterviewAndSelection
exports.getQuestionsbyId = async (req, res) => {
  try {
    const questionId = req.params.questionId;
    const question = await InterviewAndSelection.findByPk(questionId);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.status(200).json({
      message: "Question retrieved successfully",
      data: question,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve question" });
  }
};

//get all questions
exports.getAllQuestions = async (req, res) => {
  const { jobId } = req.params;
  try {
    const questions = await InterviewAndSelection.findAll();
    res.status(200).json({
      message: " All questions retrieved successfully",
      data: questions,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve questions" });
  }
};

//delete question
exports.deleteQuestion = async (req, res) => {
  const { jobId, questionId } = req.params;
  try {
    const deletedRows = await InterviewAndSelection.destroy({
      where: { id: questionId },
    });
    if (deletedRows === 0) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete question" });
  }
};

//delet all questions
exports.deleteAllQuestions = async (req, res) => {
  try {
    await InterviewAndSelection.destroy({
      where: {},
      truncate: true,
    });
    res.status(200).json({ message: "All questions deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete questions" });
  }
};
