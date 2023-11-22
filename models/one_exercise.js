const Sequelize = require("sequelize")
const sequelize = require("../utils/database")
const SetExercise = require("../models/set_exercises")
const OneExercises = sequelize.define('OneExercises', {
    one_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    duration: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    distance: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    calories: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  },
  {
    timestamps:false
  });

SetExercise.hasMany(OneExercises, { foreignKey: 'set_id' });
OneExercises.belongsTo(SetExercise, { foreignKey: 'one_id' });
  
module.exports = OneExercises;