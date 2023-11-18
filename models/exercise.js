const Sequelize = require("sequelize");

const sequelize = require("../utils/database");



const Exercise = sequelize.define("exercise", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
 
  imageURL: {
    type: Sequelize.STRING,
  },
  
  Achievement_point: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  Name: {
    type: Sequelize.STRING,
  },
  Duration: {
    type:Sequelize.INTEGER,
  },
  Method_of_performing: {
    type: Sequelize.STRING,
  },
  Pose_and_description: {
    type: Sequelize.STRING,
  },
  videoUrl: {
    type: Sequelize.STRING,
  },
  Precaution: {
    type: Sequelize.STRING,
  },



},  {
  timestamps:true
});




module.exports = Exercise;