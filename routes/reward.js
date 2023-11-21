const express = require("express");
const { getTotalReward } = require("../controllers/rewardController");

const router = express.Router()

router.get("/", getTotalReward)

module.exports = router;