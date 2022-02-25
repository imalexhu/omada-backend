const mongoose = require("mongoose");
const enums = require("../../enum");

const ProjectSchema = new mongoose.Schema({
  description: {
    type: String,
    required : true,
  },
  name: {
    type: String,
    required: true,
  },
  creator: { type: mongoose.Schema.Types.ObjectId },
  requiredTags: { type: Map, of: Number },
  discordLink: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  difficulty: {
    type: Number,
  },
  status: {
    type: Number,
  },
  peopleInvolved: {
    type: Number,
  },
  participants: [{ type: Map, of: Number }],
});

module.exports = mongoose.model("Project", ProjectSchema);
