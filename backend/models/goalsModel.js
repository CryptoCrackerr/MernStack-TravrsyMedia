const mongoose = require("mongoose");

const goalScheema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please fill the text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalScheema);
