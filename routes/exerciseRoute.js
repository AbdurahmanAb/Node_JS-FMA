// const express = require("express");
const { getExercises, getExerciseById, addExercise } = require("../controllers/exerciseController");

// const router = express.Router()

// module.express = router;



const express = require("express");
const { route } = require("./adminRoute");
const { validateExerciseRequest } = require("../middleware/validationMiddleware");


//const adminController = require("../controllers/userController");

const router = express.Router();

// router.post("/login", adminController.getUser);
router.get('/',getExercises);
router.get('/:id',getExerciseById);


router.post('/', validateExerciseRequest, addExercise)






module.exports = router;
