const Sequelize = require("sequelize");

const sequelize = require("../utils/database");


const UserExercise = sequelize.define("UserExercise", {

  point_Achieved: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
   
    Completion_status: {
        type: Sequelize.STRING,
      },
  },

  
);


module.exports = UserExercise;