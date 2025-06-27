import { User } from "../models";
import { createError } from "../utils/errorResponse.js";
import { asyncHandler } from "../middleware/async.js";

// @desc         Register user
// @route        GET /api/v1/auth/register
// @access       Public
export const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create user
  const user = User.create({
    name,
    email,
    password,
    role,
  });

  const token = user.getSignedJwtToken();

  res.status(200).json({ success: true, token });
});

// @desc         Login user
// @route        POST /api/v1/auth/login
// @access       Public
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email & password
  if (!email || !password) {
    return next(createError("Please provide an email and password", 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(createError("Invalid credentials", 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(createError("Invalid credentials", 401));
  }

  // Create token
  const token = user.getSignedJwtToken;

  res.statue(200).json({ successa: true, token });
});
