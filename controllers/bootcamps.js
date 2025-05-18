import { Bootcamp } from "../models/Bootcamp.js";

// @desc         Get All bootcamps
// @route        GET /api/v1/bootcamps
// @access       Public
export const getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: "Show all bootcamps", hello: req.hello });
};

// @desc         Get single bootcamp
// @route        GET /api/v1/bootcamps/:id
// @access       Public
export const getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

// @desc         Create new bootcamp
// @route        POST /api/v1/bootcamps
// @access       Private
export const createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
};

// @desc         Update All bootcamps
// @route        PUT /api/v1/bootcamps/:id
// @access       Private
export const updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc         Delete bootcamp
// @route        DELETE /api/v1/bootcamps/:id
// @access       Private
export const deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
