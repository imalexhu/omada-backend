const ENUMS = require('../../enum');
const { getDiscordId } = require('../discord/discord');
const { getGitHubId } = require('../github/github');
const Project = require('../schemas/Project');
const User = require('../schemas/User');
const mongoose = require('mongoose')


function updateProject(id, data) {

}

async function createProject(userId, data) {
    // building the requiredTags
    let tags = {};
    for (role in data.roles) {
        tags[ENUMS.Roles[role]] = data.roles[role];
    }

    discord = getDiscordId();
    github = getGitHubId();

    // creates a project
    let project = new Project(
        {
            description: data.description,
            name: data.name,
            creator: mongoose.Types.ObjectId(userId),
            roles: tags,
            discordLink: discord,
            githubLink: github,
            difficulty: ENUMS.Difficulty[data.difficulty],
            status: ENUMS.Status['INPROGRESS'],
            peopleInvolved: 1,
            participants: {}
        }
    );

    let history = {
        timestamp: new Date().toLocaleString(),
        projectId: project._id,
        action: "Created"
    }

    // updates the creator with the data
    await User.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(userId) },
        { $push: { currentProjectsCreated: project._id, projectHistory: history } },
    ).exec();

    await project.save();

    return { discord, github };
}

function joinProject(userId, data) {

}

function getProjects(userId, data) {

}

module.exports = {
    updateProject,
    createProject,
    joinProject,
    getProjects
}