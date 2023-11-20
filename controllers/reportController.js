const { StatusCodes } = require("http-status-codes")
const UserExercise = require("../models/user_exercise")


exports.sendReport = async (req, res)=>{
    try {
        const {point_Achieved, performance, duration  ,weigh_lifted, calorie_conversion_result, completion_status} =  req.body
      const  User_ID = req.params.uid
      const  ExerciseID = req.params.eid
        
     const   isExist = await UserExercise.findOne({
        attributes:["point_Achieved"],
            where:{
                User_ID:User_ID,
                ExerciseID:ExerciseID
            }
        })
    
        if(isExist){
            const report = await UserExercise.update({
           
                performance ,duration , weigh_lifted ,calorie_conversion_result, completion_status,point_Achieved:point_Achieved + isExist.point_Achieved
            },{
                where:{
                    User_ID:User_ID,
                    ExerciseID:ExerciseID
                }
            })
            return res.status(StatusCodes.ACCEPTED).json({"updated":report}); 
        }
       
       
          
    } catch (error) {
       res.json(error) 
    }

}

exports.get_report = async (req, res)=>{
 const uid = req.params.uid
 const eid = req.params.eid
 try {
    report = await UserExercise.findOne({
        where:{
            User_ID:uid,
            ExerciseID:eid
        }
    })

    return res.json(report);
 } catch (error) {
    
 }

}