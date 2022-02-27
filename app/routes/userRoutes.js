const User = require('../schemas/User');
const Project = require('../schemas/Project')

const ENUMS = require('../../enum');

async function createUser(data) {
    let projects = await Project.find({
        participants: data.email
    });

    console.log(projects)

    let user = new User(data);
    for (projects of projects) {
        user.currentProjectsInvolved.push(projects._id);
    }
    await user.save();
}

async function loginUser(data) {
    return await User.findOne({ email: data.email }) == null;
}

async function getUser(email) {
    return await User.findOne({ email });
}

module.exports = {
    createUser,
    loginUser,
    getUser
}