const express = require("express");
const {validateMission } = require("../middleware/validationMiddleware");
const { addMission, getAllMission, getOneMission, updateMission, deleteMission } = require("../controllers/missionController");
const router = express.Router();

router.get("/", getAllMission)
router.get("/:id/", getOneMission)

router.post("/add/", validateMission, addMission)
router.patch("/:id/",updateMission)
router.delete("/:id/", deleteMission)

module.exports = router;