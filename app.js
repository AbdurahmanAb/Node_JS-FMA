require("express-async-errors");
const { StatusCodes } = require("http-status-codes");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const User = require('./models/user')
const Exercise = require('./models/exercise')
const Reward  = require('./models/user_reward')
const UserExercise = require('./models/user_exercise')
const Mission = require('./models/mission');
// const User_Reward = require("./models/user_reward");
const Popup = require("./models/popUp")
const SetExercise = require("./models/set_exercises")
const OneExercises = require("./models/one_exercise")
const Inquiry = require("./models/Inquiry")
const Attendance = require("./models/attendance")
const UserMission = require('./models/user_mission')
const sequelize = require("./utils/database");

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(express.json());

// Routes
const adminRoutes = require("./routes/adminRoute");
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/UserRoute");
const exerciseRoute = require("./routes/exerciseRoute");
const reportRoute = require("./routes/reportRoute")
const popUpROute = require("./routes/popUp")
const attendanceRoute = require("./routes/attendanceRoute")
const missionRoute = require("./routes/missionRoute")
const inquiryRoute = require("./routes/InquiryRoute")


app.get("/", (req, res, next) => {
  res.json({ message: "Hi, welcome" });
});

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/user/", authRoutes);
app.use("/user/", userRoutes);
app.use("/exercise/",exerciseRoute )
app.use("/report/", reportRoute)
app.use("/attend/", attendanceRoute)
app.use("/popup/", popUpROute)
app.use("/mission/", missionRoute)
app.use("/inquiry/", inquiryRoute)

//404 middleware
app.use("*", (req, res, next) => {
  //'*' stands for all routes that do not match the all the above routes
  res.status(404).json({ message: "page not found" });
});

//General error handling middleware
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || "Something went error(error msg not passed)";
  res.status(statusCode).json({ message: message });
});

//USER MISSION 

User.belongsToMany(Mission, {
  through: UserMission,
  foreignKey: "UserID",
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Mission.belongsToMany(User, {
  through: UserMission,
  foreignKey: "Mission_ID",
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})
//EXERCISE TAG
// Exercise.belongsToMany(Tag,{through:Exercise_Tag, foreignKey:"Exercise_ID", onDelete: 'CASCADE',
// onUpdate: 'CASCADE'});
// Tag.belongsToMany(Exercise, {through:Exercise_Tag, foreignKey:"TagsID", onDelete: 'CASCADE',
// onUpdate: 'CASCADE'})

//USER EXERCISE
// User.belongsToMany(Exercise,{through:UserExercise, foreignKey:"User_ID", onDelete: 'CASCADE',
// onUpdate: 'CASCADE',})
// Exercise.belongsToMany(User,{through:UserExercise, foreignKey:"ExerciseID", onDelete: 'CASCADE',
// onUpdate: 'CASCADE'})




// User.hasOne(Reward,{through:User_Reward, foreignKey:"User_ID", onDelete: 'CASCADE',
// onUpdate: 'CASCADE'});
// Reward.belongsTo(User, {through:User_Reward, foreignKey:"RewardID", onDelete: 'CASCADE',
// onUpdate: 'CASCADE'})

sequelize
  .sync()
  .then((result) => {
    app.listen(8080, () => {
      console.log("Server running...");
    });
  })
  .catch((err) => {
    console.log("Connecting to mysql failed", err);
  });
