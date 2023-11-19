const Attendance = require("../models/attendance")

exports.setAttendance = async (req, res)=>{
const id = req.params.id

const attendance = Attendance.findOne({where:{userId:id}}) 
if(!attendance){
     
    const attended = Attendance.create(req.body)
}
const attended = Attendance.update(req.body)

}