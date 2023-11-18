const Sequelize = require("sequelize");
const {DataTypes} = require("sequelize")
const sequelize  = require("../utils/database");


const Reward = sequelize.define("Reward", {
// user_id:{
//   type:Sequelize.INTEGER,
//   references:{
//     model:"user",
//     id:"id"
//   }
//},
  point_earned: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },

  
  },

  
);


module.exports = Reward;