const express = require("express");
const { validateReport } = require("../middleware/validationMiddleware");
const { report, sendReport } = require("../controllers/reportController");
const router = express.Router();


router.post('/:uid/:eid/',validateReport,sendReport)

module.exports = router;