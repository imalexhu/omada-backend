const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  profileName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  currentProjectsCreated: [mongoose.Schema.Types.ObjectId],
  projectHistory: [],
  currentProjectsInvolved: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model("User", UserSchema);
