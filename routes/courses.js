import express from "express";
import { getCourses, getCourse, addCourse } from "../controllers/courses.js";

const router = express.Router();

router.route("/").get(getCourses).post(addCourse);

router.route("/:id").get(getCourse);

export default router;
