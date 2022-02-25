const User = require('../schemas/User');
const ENUMS = require('../../enum');
const { getDiscordId } = require('../discord/discord.js')
const { getGitHubId } = require('../github/github.js')

function getUser(userId) {

}

async function createUser(data) {
    let discord = getDiscordId();
    let github = getGitHubId();

    let user = new User(
        {
            githubId: github,
            discordId: discord,
            profileName: data.name,
        }
    )
    // adds every selected role
    for (role of data.roles) {
        user.roles.push(ENUMS.Roles[role]);
    }

    // adds every diffculty
    for (difficulty of data.difficulties) {
        user.difficulties.push(ENUMS.Difficulty[difficulty]);
    }

    await user.save();
}

function updateUser(id, data) {

}


module.exports = {
    getUser,
    createUser,
    updateUser
}