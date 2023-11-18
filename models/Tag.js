const Sequelize = require('sequelize')

const sequelize = require("../utils/database");

const Tag = sequelize.define("Tag",
{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    }
    ,name:{
        type:Sequelize.STRING,

    }
})

module.exports = Tag;