const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  profileName: {
    type: String,
    required: true,
  },
  currentProjectsCreated: [mongoose.Schema.Types.ObjectId],
  currentProjectsInvolved: [mongoose.Schema.Types.ObjectId],
  platformAccounts: [{
    platform: String,
    url: String,
  }],
});

module.exports = mongoose.model("User", UserSchema);
