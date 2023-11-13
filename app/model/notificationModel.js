const { default: mongoose } = require("mongoose");

// schema for notifications
const notificationSchema = mongoose.Schema({
  token: { type: String, required: true },
  type: { type: String, required: true },
  message: { type: String, required: true },
  details: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// model of notifications
export const notificationModel =
  mongoose.models.notification ||
  mongoose.model("notification", notificationSchema);
