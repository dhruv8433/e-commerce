import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = mongoose.connect(`mongodb://127.0.0.1:27017/local`, {
      dbName: "e-commerce",
    });

    console.log("connection success", connection);
  } catch (error) {
    console.log("Error in connection Database", error);
  }
}
