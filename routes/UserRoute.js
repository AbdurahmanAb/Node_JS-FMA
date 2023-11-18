// const express = require("express");
const { getUser, getUserById, getUserExercise, addUserExercise } = require("../controllers/userController");
// const router = express.Router()

// module.express = router;



const express = require("express");

//const adminController = require("../controllers/userController");

const router = express.Router();

// router.post("/login", adminController.getUser);
router.get('/',getUser);
router.get('/:id',getUserById);


router.get('/:id/exercise',getUserExercise)



router.post('/:id/exercise/:eid', addUserExercise)


module.exports = router;
