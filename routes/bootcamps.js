import express from "express";
import {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} from "../controllers/bootcamps.js";
import { advancedResults } from "../middleware/advancedResults.js";
import { Bootcamp } from "../models/Bootcamp.js";

import courseRouter from "./courses.js";

const router = express.Router({ mergeParams: true });

router.use("/bootcmpId/courses", courseRouter);

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(advancedResults(Bootcamp, 'courses'), getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

export default router;
