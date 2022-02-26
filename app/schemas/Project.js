const mongoose = require("mongoose");
const enums = require("../../enum");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required : true,
  },
  creator: { type: mongoose.Schema.Types.ObjectId },
  platforms: [{
      platform: String,
      url: String,
  }],
  status: {
    type: Number,
  },
  participants: [{ type: Map, of: mongoose.Schema.Types.ObjectId }],
});

module.exports = mongoose.model("Project", ProjectSchema);
