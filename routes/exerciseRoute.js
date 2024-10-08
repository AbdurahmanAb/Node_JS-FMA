// const express = require("express");
const { getExercises, getExerciseById, addExercise, deleteExercise, updateExercise } = require("../controllers/exerciseController");

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


router.post('/add/', validateExerciseRequest, addExercise)
router.delete('/:id', deleteExercise)
router.patch('/:id',updateExercise)






module.exports = router;
