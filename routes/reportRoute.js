const express = require("express");
const { validateReport } = require("../middleware/validationMiddleware");
const { report, sendReport, get_report } = require("../controllers/reportController");
const router = express.Router();


router.get('/:uid/:eid/',get_report)

router.post('/:uid/:eid/',validateReport,sendReport)

module.exports = router;