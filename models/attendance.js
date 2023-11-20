const Sequelize = require("sequelize")
const sequelize = require("../utils/database")
const User = require("./user")

const Attendance = sequelize.define("Attendance",{

is_present:{
    type:Sequelize.BOOLEAN,
    defaultValue:false,
    allowNull:false
},
attendance_date:{
    type:Sequelize.STRING,
    unique:true,
    allowNull:false
}
}
)
User.hasMany(Attendance)
Attendance.belongsTo(User)

module.exports = Attendance;
