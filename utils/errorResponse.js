export const createError = (status, message) => ({ status, message });

export const asyncHandler = (fn) => (req, res, next) =>
  fn(req, res, next).catch(next);

export const errorMiddleware = (err, _req, res, _next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
};
