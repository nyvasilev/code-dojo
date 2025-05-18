import express from "express";
import bootcamps from "./routes/bootcamps.js";
import morgan from "morgan";
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT || 5000;

const app = express();

// Body parser
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Connect to database
connectDB();

// Routes
app.use("/api/v1/bootcamps", bootcamps);

const server = app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`),
);

process.on("unhandledRejection", (err, _promise) => {
  console.log(`Error ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
