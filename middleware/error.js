import { createError } from "../utils/errorResponse.js";
import { ERROR_CODE, ERROR_NAME } from "./enums/errors.js";

export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log to console for dev
  console.log("error handler", err);

  // Mongoose bad ObjectId
  if (err.name === ERROR_NAME.castError) {
    const message = `Resource not found with id of ${err.value}`;
    error = createError(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === ERROR_CODE.duplicateKey) {
    const message = "Duplicate field value entered";
    error = createError(message, 400, {});
  }

  // Mongoose validation error
  if (err.name === ERROR_NAME.validationError) {
    const message = Object.values(err.errors).map((val) => val.message);
    error = createError(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server error",
  });
};
