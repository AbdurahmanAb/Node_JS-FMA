const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const Question = sequelize.define('Question', {
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  
  // Define the Answer model
  const Answer = sequelize.define('Answer', {
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  
  // Set up a one-to-one relationship
  Question.hasOne(Answer);
  Answer.belongsTo(Question);
  