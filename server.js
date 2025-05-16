import express from "express";
import bootcamps from "./routes/bootcamps.js";
import morgan from "morgan";

const PORT = process.env.PORT || 5000;

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/bootcamps", bootcamps);

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`),
);
