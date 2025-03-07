import mongoose from "mongoose";
const connectDB = async () => {
  try {
    console.log("...");
    await mongoose.connect(
      "mongodb+srv://kaleabtadesse49:8l4hmRbk5gXn8hEY@ticketing-system.wzyzh.mongodb.net/ticketing-system?retryWrites=true&w=majority&appName=ticketing-system"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
