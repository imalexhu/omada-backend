const mongoose = require("mongoose");
const enums = require("../../enum");

const ProjectSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  creator: { type: mongoose.Schema.Types.ObjectId },
});

module.exports = mongoose.model("Project", ProjectSchema);
