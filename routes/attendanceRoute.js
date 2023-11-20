const express = require("express")
const { setAttendance } = require("../controllers/attendanceController");
const { validateAttendance } = require("../middleware/validationMiddleware");
const router = express.Router()

router.post("/:id/:mid/",validateAttendance,setAttendance);


module.exports = router