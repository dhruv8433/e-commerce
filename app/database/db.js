import mongoose from "mongoose";
require('dotenv').config();

export async function dbConnect() {
  try {
    // Use await to properly wait for the connection
    const connection = await mongoose.connect(process.env.MONGO, {
      dbName: "e-commerce",
    });

    console.log("connection success", connection);
  } catch (error) {
    console.log("Error in connection Database", error);
  }
}
