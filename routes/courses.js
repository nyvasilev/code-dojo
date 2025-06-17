import express from "express";
import {
  getCourses,
  getCourse,
  addCourse,
  deleteCourse,
} from "../controllers/courses.js";
import { advancedResults } from "../middleware/advancedResults.js";
import { Course } from "../models/Course.js";

const router = express.Router();

router
  .route("/")
  .get(
    advancedResults(Course, {
      path: "bootcamp",
      select: "name description",
    }),
    getCourses,
  )
  .post(addCourse);

router.route("/:id").get(getCourse).put(addCourse).delete(deleteCourse);

export default router;
