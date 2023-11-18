const Sequelize = require("sequelize");

const sequelize = require("../utils/database");
const User = require("./user")
const Mission = require("./mission")

const UserMission = sequelize.define("UserMission", {

  point_Achieved: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },

    Completion_status: {
        type: Sequelize.STRING,
      },
  },

  
);


module.exports = UserMission;