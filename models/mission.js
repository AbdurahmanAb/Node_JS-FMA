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
  point: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  Name: {
    type: Sequelize.STRING,
  },
  Duration: {
    type:Sequelize.INTEGER,
  },
  Detail: {
    type: Sequelize.STRING,
  },
  Guide: {
    type: Sequelize.STRING,
  },
});







module.exports = Mission;