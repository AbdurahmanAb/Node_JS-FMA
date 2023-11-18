const Exercise = require("../models/exercise");

exports.postExercise = async (request)=>{
    try {
        console.log("response is", request)
        // Create a new user
        const newExercise = await Exercise.create({
     
          Name:request["Name"],
          imageURL:request["imageURL"],
          
          Achievement_point:request["Achievement_point"],
          Duration:request["Duration"],
          Method_of_performing:request["Method_of_performing"],
          Pose_and_description:request["pose_description"],
               videoUrl:request["videoUrl"],
          Precaution:request["Precaution"]
        });
    
      return newExercise;
      } catch (error) {
        console.error('Error creating user:', error);
      } 
}


exports.delete = async (id)=>{
    const exercise = await Exercise.findByPk(id); 
   return exercise.destroy()

}