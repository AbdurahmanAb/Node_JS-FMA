const express = require("express");
const { validatePopup } = require("../middleware/validationMiddleware");
const { addPopup, getAllPopup, getOnePopup } = require("../controllers/popUpcontroller");

const router = express.Router()

router.post("/add",validatePopup, addPopup )
router.get("/",getAllPopup )
router.get("/:id", getOnePopup)
module.exports = router;