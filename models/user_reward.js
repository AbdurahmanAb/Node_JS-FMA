const Sequelize = require("sequelize");
const {DataTypes} = require("sequelize")
const sequelize  = require("../utils/database");
const User = require("./user");
const Mission = require("./mission");


const Reward = sequelize.define("user_reward", {
  id:{
type:Sequelize.INTEGER,
primaryKey:true,
autoIncrement:true
  },
  point_earned: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },

  
  },

  
);
User.belongsToMany(Mission, { through: Reward });
Mission.belongsToMany(User, { through: Reward });




module.exports = Reward;