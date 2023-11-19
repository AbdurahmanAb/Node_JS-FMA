const { StatusCodes } = require("http-status-codes")
const UserExercise = require("../models/user_exercise")

exports.sendReport = async (req, res)=>{
    try {
        const {performance, duration  ,weigh_lifted, calorie_conversion_result, completion_status} =  req.body
        User_ID = req.params.uid
        ExerciseID = req.params.eid
        
        const report = await UserExercise.update({
           
            performance ,duration , weigh_lifted ,calorie_conversion_result, completion_status
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