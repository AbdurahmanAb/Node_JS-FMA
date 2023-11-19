const { StatusCodes } = require("http-status-codes")
const UserExercise = require("../models/user_exercise")

exports.sendReport = async (req, res)=>{
    try {
        const {performance, duration  ,weigh_lifted, calorie_conversion_result, completion_status} =  req.body
        User_ID = req.params.uid
        ExerciseID = req.params.eid
        
        const report = await UserExercise.create({
            User_ID,
            ExerciseID,
            performance ,duration , weigh_lifted ,calorie_conversion_result, completion_status
        })
        return res.status(StatusCodes.ACCEPTED).json(report);    
    } catch (error) {
       res.json(error) 
    }

}