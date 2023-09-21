import mongoose from "mongoose";

// create contact table schema that we used in table
export const connectModel = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  message: String,
});

// check if this table existing in mongodb compass if yes than use that table else create table using this schema
const contactModelExist =
  mongoose.models.contact || mongoose.model("contact", connectModel);

export { contactModelExist };
