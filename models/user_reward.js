const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const User_Reward = sequelize.define("User_Reward");

module.exports = User_Reward;