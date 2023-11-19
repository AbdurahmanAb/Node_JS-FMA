const { StatusCodes } = require("http-status-codes")
const UserExercise = require("../models/user_exercise")

exports.sendReport = async (req, res)=>{
    try {
        const {point_Achieved, performance, duration  ,weigh_lifted, calorie_conversion_result, completion_status} =  req.body
        User_ID = req.params.uid
        ExerciseID = req.params.eid
        
        const report = await UserExercise.update({
           
            performance ,duration , weigh_lifted ,calorie_conversion_result, completion_status,point_Achieved
        },{
            where:{
                User_ID:User_ID,
                ExerciseID:ExerciseID
            }
        })
        return res.status(StatusCodes.ACCEPTED).json("Reported Added");    
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