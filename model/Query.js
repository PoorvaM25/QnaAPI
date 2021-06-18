const mongoose = require("mongoose");
const querySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    query: {
      type: String,
      required: true,
    },
    response: [
      {
        type: Boolean,
        default: false,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);
