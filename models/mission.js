const Sequelize = require("sequelize");

const sequelize = require("../utils/database");




const Mission = sequelize.define("mission", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
 
  imageURL: {
    type: Sequelize.STRING,
  },
 
  name: {
    type: Sequelize.STRING,
  },
  duration: {
    type:Sequelize.INTEGER,
  },
  mission_detail: {
    type: Sequelize.STRING,
  },
  achievement_point:{
    type:Sequelize.DOUBLE
  },
  mission_guide: {
    type: Sequelize.STRING,
  },
  
});







module.exports = Mission;