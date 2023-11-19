const Sequelize = require("sequelize");

const sequelize = require("../utils/database");
const User = require("../models/user")
const Exercise = require("../models/exercise")

const UserExercise = sequelize.define("UserExercise", {


  point_Achieved: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  performance:{
    type:Sequelize.STRING
  },
  duration:{
    type:Sequelize.STRING,
    default:Date.now()
  },weigh_lifted:{
    type:Sequelize.DOUBLE,
  
  },
  calorie_conversion_result:{
    type:Sequelize.DOUBLE
  },   
    completion_status: {
        type: Sequelize.STRING,
      },
  },

  
);
User.belongsToMany(Exercise, {
  through: UserExercise,
  foreignKey: 'User_ID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Exercise.belongsToMany(User, {
  through: UserExercise,
  foreignKey: 'ExerciseID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = UserExercise;