const { restart } = require('nodemon');
const User = require('../models/user');

const { StatusCodes } = require('http-status-codes');
const UserExercise = require('../models/user_exercise');
const { where } = require('sequelize');

exports.getUser = async ()=>{
    console.log("hello")
    const users = await User.findAll();
return users;
}


exports.getUserExercise =async (id)=>{
const user_exercise = await UserExercise.find({where:{User_ID:id}})
return user_exercise;
}