const SourcingAndScreening = require("../models/sourcingAndScreeningModel");

exports.startSourcingAndScreening = async (req, res) => {
  const { jobId, question, questionType, questionData, preferredAnswer } =
    req.body;
  try {
    const newQuestion = new SourcingAndScreening({
      userId: req.user.id,
      question,
      jobId,
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

exports.deleteQuestion = async (req, res) => {
  const { jobId, questionId } = req.params;
  try {
    // Perform the deletion based on jobId and questionId
    const deleted = await SourcingAndScreening.destroy({
      where: {
        jobId,
        id: questionId,
        userId: req.user.id, // Ensure user can only delete their own question
      },
    });
    if (deleted) {
      res.status(204).json({ message: "Question deleted successfully" });
    } else {
      res.status(404).json({ message: "Question not found or not authorized" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete question" });
  }
};

exports.getAllQuestion = async (req, res) => {
  const { jobId } = req.params;
  try {
    const questions = await SourcingAndScreening.findAll({
      where: {
        jobId,
      },
    });
    res
      .status(200)
      .json({ message: "Questions retrieved successfully", questions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve questions" });
  }
};

//get question by id
exports.getQuestionById = async (req, res) => {
  const { jobId, questionId } = req.params;
  try {
    const question = await SourcingAndScreening.findByPk(questionId);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res
      .status(200)
      .json({ message: "Question retrieved successfully", question });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve question" });
  }
};

exports.updateQuestionById = async (req, res) => {
  const { jobId, questionId } = req.params;
  const { question, questionType, questionData, preferredAnswer } = req.body;

  try {
    const existingQuestion = await SourcingAndScreening.findByPk(questionId);
    let updatedFields = {
      question,
      questionType,
      questionData,
      preferredAnswer,
      preferredAnswer,
    };
    if (!existingQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }
    if (questionType === "Short Answer") {
      updatedFields.question = question;
      updatedFields.questionType = questionType;
      updatedFields.questionData = null;
      updatedFields.preferredAnswer = null;
    }
    if (questionType === "Paragraph") {
      updatedFields.question = question;
      updatedFields.questionType = questionType;
      updatedFields.questionData = null;
      updatedFields.preferredAnswer = null;
    }
    if (questionType === "Date") {
      updatedFields.question = question;
      updatedFields.questionType = questionType;
      updatedFields.questionData = "date";
      updatedFields.preferredAnswer = preferredAnswer;
    }
    if (questionType === "Yes/No") {
      updatedFields.question = question;
      updatedFields.questionType = questionType;
      updatedFields.questionData = ["Yes", "No"];
      updatedFields.preferredAnswer = preferredAnswer;
    }
    if (questionType === "Dropdwn") {
      updatedFields.question = question;
      updatedFields.questionType = questionType;
      updatedFields.questionData = questionData;
      updatedFields.preferredAnswer = preferredAnswer;
    }
    if (questionType === "Multiple choice") {
      updatedFields.question = question;
      updatedFields.questionType = questionType;
      updatedFields.questionData = questionData;
      updatedFields.preferredAnswer = preferredAnswer;
    }
    await existingQuestion.update(updatedFields);
    res.status(200).json({
      message: "Question updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update question" });
  }
};
