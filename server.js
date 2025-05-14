import express from "express";
import bootcamps from "./routes/bootcamps.js";

const PORT = process.env.PORT || 5000;

const app = express();

// Routes
app.use("/api/v1/bootcamps", bootcamps);

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`),
);
