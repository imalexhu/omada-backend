const User = require('../schemas/User');
const ENUMS = require('../../enum');

async function createUser(data) {
    let user = new User(data);
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