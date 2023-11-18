const { where } = require("sequelize");
const Validator = require("express-validator");
const ExerciseRepo = require("../repository/exerciseRepository")
const Exercise = require("../models/exercise");
const User = require("../models/user");

exports.getExercises = async (req, res)=>{
    const exercise = await Exercise.findAll();
    return res.json(exercise);
}

exports.getExerciseById = async (req, res)=>{
    const id= await req.params.id;
    const exercise = await Exercise.findOne({where:{id:id}});
return res.json(exercise);
}

exports.addExercise = async (req ,res)=>{
    const exercise = await ExerciseRepo.postExercise(req.body);
return res.json(exercise)
}

exports.deleteExercise =async (req, res)=>{
const deleted = await ExerciseRepo.delete(req.params.id);
return res.json(deleted)
}