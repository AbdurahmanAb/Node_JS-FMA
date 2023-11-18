const { restart } = require('nodemon');
const User = require('../models/user');

const { StatusCodes } = require('http-status-codes');
const UserRepo = require('../repository/userRepository')
exports.getUser = async(req, res)=>{ 
  const  user =  UserRepo.getUser()
   res.json(user)
}

exports.getUserById = async (req, res)=>{
   respo =  req.params.id;
  user= await User.findOne ({where:{id:respo}})
 if(user){
    res.json(user)
 }
    res.status(StatusCodes.NOT_FOUND);
 
}


