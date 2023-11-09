const { default: mongoose } = require("mongoose");

const serviceSchema = mongoose.Schema({
  title: { type: String, require: true },
  rating: Number,
});

export const serviceModel =
  mongoose.models.services || mongoose.model("services", serviceSchema);
