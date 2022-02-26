const { getDiscordId } = require('../discord/discord');
const { getGitHubId } = require('../github/github');
const Project = require('../schemas/Project');
const User = require('../schemas/User');
const mongoose = require('mongoose')

async function createProject(data) {
    // building the requiredTags
    let project = new Project(data);

    await User.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(project.creator) },
        { $push: { currentProjectsCreated: project._id } }
    ).exec();

    await project.save();
}

async function getProjects(pid) {
    return await Project.find({ _id: mongoose.Types.ObjectId(pid) });
}

module.exports = {
    createProject,
    getProjects
}