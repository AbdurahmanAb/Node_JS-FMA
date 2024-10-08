const { restart } = require('nodemon');
const User = require('../models/user');

const { StatusCodes } = require('http-status-codes');
const UserExercise = require('../models/user_exercise');
const { where } = require('sequelize');
const Exercise = require('../models/exercise');
const SetExercises = require("../models/set_exercises")
const OneExercises = require("../models/one_exercise")
exports.getUser = async ()=>{
 
    const users = await User.findAll();
return users;
}


exports.getUserExercise =async (id)=>{
    try {
        // Retrieve all UserExercises records with their associated SetExercises and OneExercises
        const userExercises = await UserExercise.findAll({
            where:{User_ID:id},
          include: [
            {
              model: SetExercises,
              include: {
                model: OneExercises,
              },
            },
          ],
        });
    
       return userExercises;
      } catch (error) {
        console.error('Error retrieving data:', error);
    
      }
// const user_exercise = await User.findOne({
//  where:{id},
//  include: [
//     {
//       model: Exercise,
//       through: UserExercise,
//       include: [
//         {
//           model: SetExercises,
//           include: {
//             model: OneExercises
//           }
//         }
//       ]
//     }
//   ]

// });

}


exports.enrollExercise = async (uid, eid)=>{
    
    try{
 const enrolled = await UserExercise.create({
User_ID:uid,
ExerciseID:eid

 })
 const isExist =await Exercise.findOne({where:{id:eid}})
const updateCOunt =await Exercise.update({
  userCount:isExist.userCount+ 1
},{where:{id:eid}})
console.log("update Count",updateCOunt)
 return enrolled;
    }catch(err){
        return err;
       
    }

  }