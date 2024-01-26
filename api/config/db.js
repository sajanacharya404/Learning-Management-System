import mongoose from "mongoose";
export const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Databse connected");
  } catch (error) {
    console.log("Database error", error);
  }
};
