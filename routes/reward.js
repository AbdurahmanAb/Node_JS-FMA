const express = require("express");
const { getTotalReward } = require("../controllers/rewardController");

const router = express.Router()

router.get("/:id/:mid", getTotalReward)

module.exports = router;