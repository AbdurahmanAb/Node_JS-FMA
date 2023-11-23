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
  
  detailed_information: {
    type: Sequelize.STRING,
    defaultValue: 0.0,
  },
  name: {
    type: Sequelize.STRING,
  },

  method_of_performing: {
    type: Sequelize.STRING,
  },
  pose_and_description: {
    type: Sequelize.STRING,
  },
  internal_videoUrl: {
    type: Sequelize.STRING,
  },
  external_video_url:{
    type:Sequelize.STRING
  },
  precaution: {
    type: Sequelize.STRING,
  },
  tags:{
    type:Sequelize.STRING
  },
  userCount:{
    type:Sequelize.INTEGER,
    defaultValue:0
  }



},  {
  timestamps:true
});




module.exports = Exercise;