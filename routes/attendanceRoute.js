const express = require("express")
const { setAttendance, Attend } = require("../controllers/attendanceController");
const { validateAttendance } = require("../middleware/validationMiddleware");
const router = express.Router()


router.post("/:id",validateAttendance, Attend)
router.post("/:id/:mid/",setAttendance);


module.exports = router