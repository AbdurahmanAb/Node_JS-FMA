const { Inquiry, Answer } = require("../models/Inquiry");
const User = require('../models/user');

const { StatusCodes } = require('http-status-codes');
const UserRepo = require('../repository/userRepository');
const UserMission = require('../models/user_mission');
const Mission = require('../models/mission');

exports.getUser = async(req, res)=>{ 
  const  user = await UserRepo.getUser()
   res.json(user)
}

exports.getUserById = async (req, res)=>{
  const respo =  req.params.id;
 const user= await User.findOne ({where:{id:respo}})
 
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

//User Mission// Assuming you have a model named UserMission


exports.addUserMission = async (req, res) => {
  const uid = req.params.uid;
  const mid = req.params.mid;
console.log("mid = ",mid)
console.log("uid = ", uid)
  try {
    // Check if the user and mission exist before enrollment
    // Add the necessary conditions based on your table structures
    const userExists = User.findOne({where:{id:uid}}) /* Check if user with uid exists */;
    const missionExists = Mission.findOne({where:{id:mid}})/* Check if mission with mid exists */;

    if (!userExists || !missionExists) {
    }

    const enrollment = await UserMission.create({
      UserID: uid,
      Mission_ID: mid,
    });

    return res.status(201).json(enrollment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getUserMission = async(req, res)=>{
   const id = req.params.id
  const userMission = await User.findOne({where:{id},include:{
    model:Mission,
   through:UserMission
  }})
  return res.json(userMission)
}

//ASK QUESTION 
exports.askQuestion = async (req, res)=>{
  uid = req.params.uid;

  try {
      const question = await Inquiry.create({
          question:req.body.question,
          userId:uid,
          status:"Waiting for Answer"


      })

      return res.json(question);
  } catch (error) {
      
  }

}

//GET Answer
exports.getAnswer = async (req, res)=>{
  uid = req.params.id
  const answer = await Inquiry.findOne({
    where:{userId:uid},
    include:{
      model:Answer
    }
  })
  res.json(answer)
  
}
