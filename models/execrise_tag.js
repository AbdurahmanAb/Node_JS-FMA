const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Exercise_Tag = sequelize.define("Exercise_Tag");

module.exports = Exercise_Tag;