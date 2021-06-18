const mongoose = require("mongoose");
const querySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    queryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publisher",
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);
