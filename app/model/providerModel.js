import mongoose from "mongoose";

const providerSchema = mongoose.Schema({
  title: String,
  desc: String,
  image: String,
  rating: Number,
  order_completed: Number,
});

const ProviderModelExist =
  mongoose.models.unique || mongoose.model("unique", providerSchema);

export { ProviderModelExist };
