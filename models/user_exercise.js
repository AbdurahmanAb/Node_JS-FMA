const Sequelize = require("sequelize");

const sequelize = require("../utils/database");
const User = require("../models/user")
const Exercise = require("../models/exercise")

const UserExercise = sequelize.define("UserExercise", {


 id:{
  type:Sequelize.INTEGER,
  primaryKey:true

 },
 performance: {
  type: Sequelize.ENUM('STANDARD', 'ECCENTRIC', 'CONCENTRIC'),
  allowNull: false,
},
weigh_lifted:{
    type:Sequelize.DOUBLE,
  
  },
  completion_status:{
type:Sequelize.STRING
  },
  
    is_supported: {
        type: Sequelize.BOOLEAN,
      },
  },
  {
    timestamps:false
  }
  
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
}
);

module.exports = UserExercise;