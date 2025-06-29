import { Bootcamp } from "../models";
import { createError } from "../utils";
import { asyncHandler } from "../middleware/async.js";

// @desc         Get All bootcamps
// @route        GET /api/v1/bootcamps
// @access       Public
export const getBootcamps = asyncHandler(async (req, res, next) =>
  res.status(200).json(res.advancedResults),
);

// @desc         Get single bootcamp
// @route        GET /api/v1/bootcamps/:id
// @access       Public
export const getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.find(req.params.id);
  if (!bootcamp) {
    return createError(`Bootcamp not found with id of ${req.params.id}`, 404, {
      details: error.stack,
    });
  }

  res.status(200).json({ success: true, data: bootcamp });
});

// @desc         Create new bootcamp
// @route        POST /api/v1/bootcamps
// @access       Private
export const createBootcamp = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;

  // Check for published bootcamp
  const publishedBootcamp = await Bootcamp.findOne({ user: req.user.id });

  // If the user is not an admin, they can only add one bootcamp
  if (publishedBootcamp && req.user.role !== "admin") {
    return next(
      createError(
        `The user with ID ${req.user.id} has already published a bootcamp`,
        400,
      ),
    );
  }

  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

// @desc         Update All bootcamps
// @route        PUT /api/v1/bootcamps/:id
// @access       Private
export const updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    return createError(`Bootcamp not found with id of ${req.params.id}`, 404, {
      details: error.stack,
    });
  }

  res.status(200).json({ success: true, data: bootcamp });
});

// @desc         Delete bootcamp
// @route        DELETE /api/v1/bootcamps/:id
// @access       Private
export const deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    return createError(`Bootcamp not found with id of ${req.params.id}`, 404, {
      details: error.stack,
    });
  }

  bootcamp.remove();

  res.status(200).json({ success: true, data: {} });
});
