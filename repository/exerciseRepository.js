const Exercise = require("../models/exercise");

exports.postExercise = async (request)=>{
    const {  name,
        imageURL,
        
        detail_information,
      
        method_of_performing,
        pose_and_description,
             internal_videoUrl,
             external_video_url,
        precaution, tags} = request
    
    try {
        // console.log("response is", request)
        // Create a new user
       
        const newExercise = await Exercise.create({
     
          name,
          imageURL,
          
          detail_information,
        
          method_of_performing,
          pose_and_description,
               internal_videoUrl,
               external_video_url,
          precaution,
              tags: tags.join(',')
          
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
   exercise.update(req.body) 

    return exercise;
  } catch (error) {
    console.log(error)
  }
 
}