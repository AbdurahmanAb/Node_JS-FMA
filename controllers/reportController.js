const { StatusCodes } = require("http-status-codes")
const UserExercises = require("../models/user_exercise")
const SetExercises = require("../models/set_exercises")
const OneExercises = require("../models/one_exercise")


exports.sendReport = async (req, res)=>{
//User Exercise ID
const id = req.params.id;
    try {
        // Extract data from the request body
        const { performance, weight_lifted, isSupported, set_exercises } = req.body;
    
        // Create a new UserExercises record
        const userExercises = await UserExercises.update({
          performance,
          weight_lifted,
          isSupported,
        },{where:{
            id:id
        }});
    
        // Create SetExercises and OneExercises records for each set and exercise
        for (const set of set_exercises) {
          const { set_cnt, one_exercises } = set;
    
          const setExercises = await SetExercises.create({
            set_cnt,
            userExercisesId: userExercises.id, // Assign the foreign key
          });
    
          for (const oneExercise of one_exercises) {
            const { duration, distance, calories } = oneExercise;
    
            await OneExercises.create({
              duration,
              distance,
              calories,
              set_id: setExercises.id, // Assign the foreign key
            });
          }
        }
    
        res.status(201).json({ message: 'Data added successfully' });
      } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    
    // try {
    //     const {point_Achieved, performance, duration  ,weigh_lifted, calorie_conversion_result, completion_status} =  req.body
    //   const  User_ID = req.params.uid
    //   const  ExerciseID = req.params.eid
        
    //  const   isExist = await UserExercise.findOne({
    //     attributes:["point_Achieved"],
    //         where:{
    //             User_ID:User_ID,
    //             ExerciseID:ExerciseID
    //         }
    //     })
    
    //     if(isExist){
    //         const report = await UserExercise.update({
           
    //             performance ,duration , weigh_lifted ,calorie_conversion_result, completion_status,point_Achieved:point_Achieved + isExist.point_Achieved
    //         },{
    //             where:{
    //                 User_ID:User_ID,
    //                 ExerciseID:ExerciseID
    //             }
    //         })
    //         return res.status(StatusCodes.ACCEPTED).json({"updated":report}); 
    //     }
       
       
          
    // } catch (error) {
    //    res.json(error) 
    // }

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