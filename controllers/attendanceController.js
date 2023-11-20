const Attendance = require("../models/attendance");
const UserMission = require("../models/user_mission");

exports.setAttendance = async (req, res)=>{
    userId = req.params.id
    mid = req.params.mid
    function getTodayDate() {
        return new Date().toISOString().split('T')[0];
      }
      
      // Assuming a function to check if a user attended today
      async function userAttendedToday(userId) {
        const todayDate = getTodayDate();
        const attendance = await Attendance.findOne({
          where: { userId:userId,  attendance_date: todayDate },
        });
        console.log(!!attendance)
        if(!!attendance){
            try {
    
                // const attended = await Attendance.create({ attendance_date:currentDate, is_present:req.body.is_present})
                // res.json(attended)
                // } catch (error) {
                //     //res.json({"message":error.errors[0]["message"]})
                //     res.json({"message":"Already Attended Today"})
                
                      }
                      catch{}          // }
        }
        return true;

      }
      async function resetConsecutiveAttendance(userId) {
        await UserMission.update(
          { consecutiveDaysAttended: 0 },
          { where: { userId } }
        );
      }
      
      // Assuming a function to increment consecutive attendance for a user
      async function incrementConsecutiveAttendance(userId) {
        const currentDate = getTodayDate();
        const attended = await Attendance.create({ attendance_date:currentDate, is_present:req.body.is_present})
      const isExist = UserMission.findOne({where:{userId:userId}})
      if(isExist){
        await UserMission.update({consecutiveDaysAttended:UserMission.consecutiveDaysAttended+1}, {
            where: { userId },
          });
 
      }
    await UserMission.create({consecutiveDaysAttended:UserMission.consecutiveDaysAttended+1,  UserID:userId, Mission_ID:mid }, {
       
      });
     
      }
      
      // Main login function
      async function userLogin(userId) {
        if (await userAttendedToday(userId)) {
          await incrementConsecutiveAttendance(userId);
        } else {
          await resetConsecutiveAttendance(userId);
        }
      
        // Check mission success condition and update mission status
        const userMissions = await UserMission.findOne({ where: { userId } });
      
      
        if (userMissions && userMissions.consecutiveDaysAttended == 7) {
            // Set mission as successful
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
      scheduledTask()
      res.json("Added")
// const currentDate = new Date().toISOString().split('T')[0];

// try {
    
// const attended = await Attendance.create({ attendance_date:currentDate, is_present:req.body.is_present})
// res.json(attended)
// } catch (error) {
//     //res.json({"message":error.errors[0]["message"]})
//     res.json({"message":"Already Attended Today"})

// }



}
    