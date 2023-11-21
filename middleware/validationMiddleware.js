const { body, validationResult } = require("express-validator");

const { StatusCodes } = require("http-status-codes");

const withValidatorErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      const errorArray = errors.array();
      if (!errors.isEmpty()) {
        const errorMessages = errorArray.map((error) => error.msg);
        const error = new Error(errorMessages);
        error.statusCode = StatusCodes.BAD_REQUEST;
        if (errorMessages[0].startsWith("no student")) {
          error.statusCode = StatusCodes.NOT_FOUND;
        }
        throw error;
      }
      next();
    },
  ];
};

exports.validateUserLogin = withValidatorErrors([
  body("email").notEmpty().isEmail().withMessage("A valid email is required"),

  body("loginType").notEmpty().withMessage("Login Type is required"),

  body("nickName").notEmpty().withMessage("Nick Name is required"),

  body("gender").notEmpty().withMessage("Gender is required"),

  body("height").notEmpty().withMessage("Height is required"),

  body("weight").notEmpty().withMessage("Weight is required"),
]);

exports.validateExerciseRequest = withValidatorErrors([
  body("Name").notEmpty().withMessage("A valid Name is required"),

  body("Duration").notEmpty().withMessage("Duration is required"),

  body("pose_description").notEmpty().withMessage("pose_description is required"),

  body("Precaution").notEmpty().withMessage("Precaution is required"),
  body("Method_of_performing").notEmpty().withMessage("Method Of Performing is required"),


]);
exports.validateReport = withValidatorErrors([
  body("point_Achieved").notEmpty().withMessage("point_Achieved Is required"),
  body("performance").notEmpty().withMessage("performance is required"),
 // body("duration").notEmpty().withMessage("duration  is required"),
  body("weigh_lifted").notEmpty().withMessage("weigh_lifted is required"),
  body("calorie_conversion_result").notEmpty().withMessage("calorie_conversion_result  is required"),
  body("completion_status").notEmpty().withMessage("completion_status is required"),

])   

exports.validateAttendance = withValidatorErrors([
  body("is_present").notEmpty().withMessage("is_present is required"),
  
])

exports.validatePopup = withValidatorErrors([
  body("title").notEmpty().withMessage("pop up Title Is Required"),
  body("content").notEmpty().withMessage("content IS Required")
])

exports.validateMission = withValidatorErrors([
  body("name").notEmpty().withMessage("name is Required"),
  body("duration").notEmpty().withMessage("duration is required"),
  body("mission_detail").notEmpty().withMessage("mission_detail is required"),
  body("achievement_point").notEmpty().withMessage("achievement_point is required"),
  body("mission_guide").notEmpty().withMessage("mission_guide is required")

])
 