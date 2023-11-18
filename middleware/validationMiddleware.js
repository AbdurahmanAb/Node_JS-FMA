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

  body("pose_description").notEmpty().withMessage("Pose_description is required"),

  body("Precaution").notEmpty().withMessage("Precaution is required"),
  body("Method Of Performing").notEmpty().withMessage("Method Of Performing is required"),


]);