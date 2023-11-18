const User = require('../models/user')
const Exercise = require('../models/exercise')
const Reward  = require('../models/reward')
const UserExercise = require('../models/user_exercise')
const Mission = require('../models/mission');
const UserMission = require('../models/user_mission')
const Tag = require('../models/Tag')
const Exercise_Tag = require('../models/exercise_Tag')
const InitRealtions = ()=>{
    //USER MISSION 
User.belongsToMany(Mission,{through:UserMission, foreignKey:"Mission_ID", onDelete: 'CASCADE',
onUpdate: 'CASCADE',})
Mission.belongsToMany(User,{through:UserMission, foreignKey:"UserID", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})

//EXERCISE TAG
Exercise.belongsToMany(Tag,{through:Exercise_Tag, foreignKey:"Exercise_ID", onDelete: 'CASCADE',
onUpdate: 'CASCADE'});
Tag.belongsToMany(Exercise, {through:Exercise_Tag, foreignKey:"TagsID", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})

//USER EXERCISE
User.belongsToMany(Exercise,{through:UserExercise, foreignKey:"User_ID", onDelete: 'CASCADE',
onUpdate: 'CASCADE',})
Exercise.belongsToMany(User,{through:UserExercise, foreignKey:"ExerciseID", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})

//User Reward
User.hasOne(Reward,{foreignKey:"UserId"});
Reward.belongsTo(User ,{foreignKey:"UserId"});

}

module.exports = InitRealtions;