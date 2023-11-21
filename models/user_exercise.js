const Sequelize = require("sequelize");

const sequelize = require("../utils/database");
const User = require("../models/user")
const Exercise = require("../models/exercise")

const UserExercise = sequelize.define("UserExercise", {


 
  performance:{
    type:Sequelize.STRING
  },
weigh_lifted:{
    type:Sequelize.DOUBLE,
  
  },
  
    is_supported: {
        type: Sequelize.BOOLEAN,
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