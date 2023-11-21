const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const Answers = sequelize.define("Answer",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    answer:{
        type:Sequelize.STRING
    }
})