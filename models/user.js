const Sequelize = require("sequelize");
const UserMission = require("../models/user_mission");
const sequelize = require("../utils/database");
const Mission = require("./mission");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    unique:true
  },
  loginType: {
    type: Sequelize.STRING,
  },
  imageURL: {
    type: Sequelize.STRING,
  },
  point: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  nickName: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.STRING,
  },
  height: {
    type: Sequelize.DOUBLE,
  },
  weight: {
    type: Sequelize.DOUBLE,
  },
});




module.exports = User;
