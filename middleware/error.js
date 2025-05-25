import { createError } from "../utils/errorResponse.js";

export const errorHandler = (err, _req, res, _next) => {
  let error = { ...err };
  error.message = err.message;

  // Log to console for dev
  console.log(err);

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `Resource not found with id of ${err.value}`;
    console.log("er", error);
    error = createError(message, 404);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: error.message || "Server error",
  });
};
