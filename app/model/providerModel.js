import mongoose from "mongoose";

const providerSchema = mongoose.Schema({
  title: { type: String, required: true },
  desc: String,
  image: String,
  rating: Number,
  order_completed: Number,
});

export const ProviderModel =
  mongoose.models.Providers || mongoose.model("Providers", providerSchema);
