const User = require('../schemas/User');
const ENUMS = require('../../enum');
const { getDiscordId } = require('../discord/discord.js')
const { getGitHubId } = require('../github/github.js')

function getUser(userId) {
    
}

async function createUser(data) {
    let user = new User(data)
    await user.save();
}

function updateUser(id, data) {

}


module.exports = {
    getUser,
    createUser,
    updateUser
}