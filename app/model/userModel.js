// this is user table where we can get user data and store into db

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true, // `email` must be unique
  },
  password: String,
  phone: Number,
  name: String,
  address: String,
  token: String,
  // status: String,
  // profile: String,
});

// exporting user model
export const userModel =
  mongoose.models.users || mongoose.model("users", userSchema);
