export const createError = (
  message,
  statusCode = 500,
  meta = { details: null },
) => ({
  ...new Error(message),
  statusCode,
  ...meta,
});
