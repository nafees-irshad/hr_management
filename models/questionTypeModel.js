const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const { questionType } = require("./syncTables.js");

const QuestionType = sequelize.define(
  "QuestionType",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    shortAnswer: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    paragraph: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    questionDate: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    preferredAnswerDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    yesNo: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    questionYesNo: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    preferredAnswerYesNo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    dropDown: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    questionDropDown: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    preferredAnswerDropDown: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    multipleChoice: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    questionMultipleChoice: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    preferredAnswerMultipleChoice: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  { tableName: "QuestionType", timestamps: false }
);

module.exports = QuestionType;
