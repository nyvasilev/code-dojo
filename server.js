import express from "express";
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`),
);
