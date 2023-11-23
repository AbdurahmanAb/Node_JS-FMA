const Attendance = require("../models/attendance");
const UserMission = require("../models/user_mission");

function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}
exports.Attend = async(req, res)=>{
  const userId = req.params.id

  const currentDate = getTodayDate();

 const isExist =  Attendance.findOne({
    where: {   attendance_date: currentDate },
  });
  if(isExist){
    return "already Attended Today"
  }
 
  const attended = await Attendance.create({ attendance_date:currentDate, is_present:req.body.is_present, userId:userId})
  return  res.json(attended)
}
exports.setAttendance = async (req, res)=>{
   const userId = req.params.id
    const mid = req.params.mid
   
      
      // Assuming a function to check if a user attended today
      async function userAttendedToday(userId) {
        const todayDate = getTodayDate();
        const attendance = await Attendance.findOne({
          where: { userId:userId,  attendance_date: todayDate },
        });

       return !!attendance

      }
      async function resetConsecutiveAttendance(userId) {
        await UserMission.update(
          { consecutiveDaysAttended: 0 },
          { where: { UserID:userId } }
        );
      }
      
      // Assuming a function to increment consecutive attendance for a user
      async function incrementConsecutiveAttendance(userId, mid) {
        const currentDate = getTodayDate();
    //    const attended = await Attendance.create({ attendance_date:currentDate, is_present:req.body.is_present})
      const isExist =await UserMission.findOne({where:{UserID:userId, Mission_ID:mid}})
      if(isExist){
        await UserMission.update({consecutiveDaysAttended:isExist.consecutiveDaysAttended+1}, {
            where: { UserID:userId,Mission_ID:mid },
          });
 console.log(isExist.consecutiveDaysAttended)
      }else{
        await UserMission.create({consecutiveDaysAttended:UserMission.consecutiveDaysAttended+1,  UserID:userId, Mission_ID:mid }, {
       
        });
      }

     
      }
      
      // Main login function
      async function userLogin(userId) {
        if (await userAttendedToday(userId)) {
          await incrementConsecutiveAttendance(userId,mid);
        } else {
          await resetConsecutiveAttendance(userId);
        }
      
        // Check mission success condition and update mission status
        const userMissions = await UserMission.findOne({ where: { UserID:userId } });
      
      
        if (userMissions && userMissions.consecutiveDaysAttended >= 7) {
            // Set mission as successful
            await UserMission.update({completion_status:"completed"},{
              where:{
                UserID:userId,
                Mission_ID:mid

              }
            })
            await resetConsecutiveAttendance(userId);
          }
      }
      
      // Scheduled task to reset consecutive attendance for users who missed a day
      async function scheduledTask() {
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        const yesterdayDateString = yesterdayDate.toISOString().split('T')[0];
      
        const usersMissedYesterday = await Attendance.findAll({
          where: {  attendance_date: yesterdayDateString },
        });
      
        for (const user of usersMissedYesterday) {
          await resetConsecutiveAttendance(user.userId);
        }
      }

      userLogin(userId);
   const response=  scheduledTask()
      res.json(response)
// const currentDate = new Date().toISOString().split('T')[0];

// try {
    
// const attended = await Attendance.create({ attendance_date:currentDate, is_present:req.body.is_present})
// res.json(attended)
// } catch (error) {
//     //res.json({"message":error.errors[0]["message"]})
//     res.json({"message":"Already Attended Today"})

// }



}
    