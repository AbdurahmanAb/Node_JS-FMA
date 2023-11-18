const { restart } = require('nodemon');
const User = require('../models/user');

const { StatusCodes } = require('http-status-codes');
const UserRepo = require('../repository/userRepository')
exports.getUser = async(req, res)=>{ 
  const  user = await UserRepo.getUser()
   res.json(user)
}

exports.getUserById = async (req, res)=>{
   respo =  req.params.id;
  user= await User.findOne ({where:{id:respo}})
 
    res.json(user)
 
 
}


exports.getUserExercise = async (req, res)=>{
   id = req.params.id;
   const userExercise = await UserRepo.getUserExercise(id);
   return res.json(userExercise);
}

exports.addUserExercise = async (req, res)=>{
   uid = req.params.id
   eid = req.params.eid
   enrolled = await UserRepo.enrollExercise(uid,eid);
   return res.json(enrolled)


}