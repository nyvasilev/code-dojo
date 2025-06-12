import { Course } from "../models/Course.js";
import { createError } from "../utils/errorResponse.js";
import { asyncHandler } from "../middleware/async.js";

// @desc         Get All courses
// @route        GET /api/v1/courses
// @route        GET /api/v1/bootcamps/:bootcampId/courses
// @access       Public

export const getCourses = asyncHandler(async (req, res, next) => {
  let query;

  if (req.param?.bootcampId) {
    query = Course.find({ bootcamp: req.param.bootcampId });
  } else {
    query = Course.find().populate({
      path: "bootcamp",
      select: "name description",
    });
  }

  const courses = await query;

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  });
});
