const mongoose = require("mongoose");
const enums = require("../../enum");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  platforms: [{
    platform: String,
    url: String,
  }],
  status: {
    type: String,
  },
  participants: [String],
});

module.exports = mongoose.model("Project", ProjectSchema);
