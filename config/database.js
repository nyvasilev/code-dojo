import mongoose from "mongoose";

export const connectDB = async () => {
  const c = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connectd: ${c.connection.host}`);
};
