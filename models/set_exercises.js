const Sequelize = require("sequelize")
const sequelize = require("../utils/database")
const UserExercise = require("../models/user_exercise")
const SetExercises = sequelize.define('SetExercises', {
    set_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    set_cnt: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps:false
  });

  module.exports= SetExercises


UserExercise.hasMany(SetExercises, { foreignKey: 'exercise_id' });
SetExercises.belongsTo(UserExercise, { foreignKey: 'set_id' });