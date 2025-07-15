import mongoose from "mongoose";

let isConnect = false;
const connectDB = async () => {
  if (isConnect) {
    console.log("Data base already connected");
  }
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    isConnect = true;
    console.log("Database connected", connect.connection.host);
  } catch (e) {
    console.error("Error in Data base connection", e);
  }
};
export default connectDB;
