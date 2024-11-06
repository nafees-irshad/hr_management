const { Hiring } = require("../models/hiredModel");

exports.offerLetter = async (req, res) => {
  // const data = req.body;
  try {
    const newhiring = Hiring.build({
      userId: req.user.id,
      ...req.body,
    });

    // Validate the data to ensure no missing required fields
    await newhiring.validate();

    // Now save to the database
    await newhiring.save();

    res.status(201).json({
      success: true,
      data: newhiring,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create offer letter" });
  }
};
