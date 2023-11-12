const { default: mongoose } = require("mongoose");

// order schema that defined all that order contains
const orderSchema = mongoose.Schema({
  userToken: {
    type: String,
    required: true,
  },
  data: [],
  status: {
    type: String,
    enum: ["pending", "processed", "completed"],
    default: "pending",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

export const placeOrder =
  mongoose.models.Orders || mongoose.model("Orders", orderSchema);
