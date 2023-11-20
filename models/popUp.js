const Sequelize = require("sequelize")
const sequelize = require("../utils/database")


const Popup = sequelize.define("PopUp",

{id:{
type:Sequelize.INTEGER,
primaryKey:true,
autoIncrement:true
},
title:{
    type:Sequelize.STRING,

},
content:{
type:Sequelize.STRING
}


},
{
    timestamps:true
}
)

module.exports = Popup;