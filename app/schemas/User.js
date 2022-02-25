const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  projectHistory: [],
  currentProjectsInvolved: [mongoose.Schema.Types.ObjectId],
  difficulties: [],
  roles : [],
  profileName: {
    type: String,
    required: true,
    index: { unique: true },
  },
});

module.exports = mongoose.model("User", UserSchema);
