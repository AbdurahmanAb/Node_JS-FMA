const Exercise = require("../models/exercise");

exports.postExercise = async (request)=>{
    const {  Name,
        imageURL,
        
        Achievement_point,
        Duration,
        Method_of_performing,
        Pose_and_description,
             videoUrl,
        Precaution} = request
    try {
        // console.log("response is", request)
        // Create a new user
       
        const newExercise = await Exercise.create({
     
          Name,
          imageURL,
          
          Achievement_point,
          Duration,
          Method_of_performing,
          Pose_and_description,
               videoUrl,
          Precaution,
        });
    
      return newExercise;
      } catch (error) {
     return error;
      } 
}


exports.delete = async (id)=>{
    const exercise = await Exercise.findByPk(id); 
   return exercise.destroy()

}

exports.update = async(req)=>{
  try {
    const {  Name,
      imageURL,
      
      Achievement_point,
      Duration,
      Method_of_performing,
      Pose_and_description,
           videoUrl,
      Precaution} = req.body
    const exercise = await Exercise.findByPk(req.params.id)
   Exercise.update(req.body) 

    return exercise;
  } catch (error) {
    console.log(error)
  }
 
}