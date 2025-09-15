import mongoose from "mongoose";
import dotenv from "dotenv";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNNECTIONSTRING);

    console.log("Liên kết CSDL thành công!");
  } catch (error) {
    console.error("Lỗi khi kết nối CSDL:", error);
    process.exit(1); // exit with error
  }
};
