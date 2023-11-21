// const express = require("express");
const { getUser, getUserById, getUserExercise, addUserExercise, addUserMission, getUserMission } = require("../controllers/userController");
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

//User Mission
router.get('/:id/mission',getUserMission)

router.post('/:uid/mission/:mid', addUserMission)



module.exports = router;
