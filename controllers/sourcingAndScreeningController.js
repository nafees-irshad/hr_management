const { sourcingAndScreening } = require("../models/syncTables");
const { questionType } = require("../models/syncTables");

exports.startSourcingAndScreening = async (req, res) => {
  const { question } = req.body;
  try {
    const newQuestion = new sourcingAndScreening({
      userId: req.user.id,
      question,
    });
    await newQuestion.save();
    res.status(201).json({ message: "Question created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create question" });
  }
};
