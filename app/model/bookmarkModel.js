const { default: mongoose } = require("mongoose");

const bookmarkSchema = mongoose.Schema({
  data: [],
  token: { type: String, required: true },
});

export const BookmarkModel =
  mongoose.models.bookmark || mongoose.model("bookmark", bookmarkSchema);
