import { Bootcamp } from "../models/Bootcamp.js";

// @desc         Get All bootcamps
// @route        GET /api/v1/bootcamps
// @access       Public
export const getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc         Get single bootcamp
// @route        GET /api/v1/bootcamps/:id
// @access       Public
export const getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ successa: true });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
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
export const updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ success: true });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc         Delete bootcamp
// @route        DELETE /api/v1/bootcamps/:id
// @access       Private
export const deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
