const Exercise = require("../models/exercise");

exports.postExercise = async (request)=>{
    try {
        // Create a new user
        const newExercise = await Exercise.create({
     
          Name:request.body.name,
          imageURL:request.body.imageURL,
          Achievement_point:request.body.Achievement_point,
          Duration:request.body.Duration,
          Method_of_performing:request.body.Method_of_performing,
          Pose_and_description:request.body.Pose_and_description,
          videoUrl:request.body.videoUrl,
          Precaution:request.body.Precaution
        });
    
      return newExercise;
      } catch (error) {
        console.error('Error creating user:', error);
      } 
}