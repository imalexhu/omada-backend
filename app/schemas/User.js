const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  profileName: {
    type: String,
    required: true,
    index: { unique: true },
  },
  currentProjectsCreated: [mongoose.Schema.Types.ObjectId],
  currentProjectsInvolved: [mongoose.Schema.Types.ObjectId],
  platformAccounts: [{
    platform: String,
    url: String,
  }],
});

module.exports = mongoose.model("User", UserSchema);
