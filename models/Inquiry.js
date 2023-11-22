const Sequelize = require("sequelize")
const sequelize = require("../utils/database");
const User = require("./user");

const  Inquiry = sequelize.define("Inquiry",
{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    question:{
        type:Sequelize.STRING,

    },
    status:{
        type:Sequelize.ENUM("Answered", "Waiting for Answer", "No Answer")
    }

})
const Answer = sequelize.define('Answer', {
    answer: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  
  // Set up a one-to-one relationship
  Inquiry.hasOne(Answer);
  User.hasMany(Inquiry)
  Inquiry.belongsTo(User)
  Answer.belongsTo(Inquiry);

  module.exports = {Inquiry, Answer};