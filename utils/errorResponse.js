export const createError = (
  message,
  statusCode = 500,
  meta = { details: null },
) => ({
  message,
  statusCode,
  ...meta,
});
