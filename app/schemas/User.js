const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  githubId: {
    type: String,
    required: true,
    unique: true,
  },
  discordId: {
    type: String,
    unique: true,
    required: true,
  },
  currentProjectsCreated: [mongoose.Schema.Types.ObjectId],
  projectHistory: {},
  currentProjectsInvolved: [mongoose.Schema.Types.ObjectId],
  difficulties: [],
  profileName: {
    type: String,
    required: true,
    index: { unique: true },
  },
});

module.exports = mongoose.model("User", UserSchema);
