import express from "express";
import {
  getCourses,
  getCourse,
  addCourse,
  addCourse,
  deleteCourse,
} from "../controllers/courses.js";

const router = express.Router();

router.route("/").get(getCourses).post(addCourse);

router.route("/:id").get(getCourse).put(addCourse).delete(deleteCourse);

export default router;
