const Attendance = require("../models/attendance")

exports.setAttendance = async (req, res)=>{

const currentDate = new Date().toISOString().split('T')[0];

try {
    
const attended = await Attendance.create({ attendance_date:currentDate, is_present:req.body.is_present})
res.json(attended)
} catch (error) {
    //res.json({"message":error.errors[0]["message"]})
    res.json({"message":"Already Attended Today"})

}



}