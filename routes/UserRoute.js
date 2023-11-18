// const express = require("express");
const { getUser, getUserById } = require("../controllers/userController");
// const router = express.Router()

// module.express = router;



const express = require("express");

//const adminController = require("../controllers/userController");

const router = express.Router();

// router.post("/login", adminController.getUser);
router.get('/',getUser);
router.get('/:id',getUserById);


router.get(':id/exercise')



router.post(':id/exercise/:id')


module.exports = router;
