const express = require("express");
const { askQuestion, answerQuestion, getAllInquiry } = require("../controllers/InquiryController");
const { validateInquiry, validateAnswer } = require("../middleware/validationMiddleware");

const router = express.Router();

router.get("/",getAllInquiry )


router.post("/:qid/answer", validateAnswer,answerQuestion)

module.exports = router;