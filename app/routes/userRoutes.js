const User = require('../schemas/User');
const ENUMS = require('../../enum');

async function createUser(data) {
    let user = new User(data);
    await user.save();
}

async function loginUser(data) {
    let val = await User.findOne({ email: data.email });
}

module.exports = {
    createUser,
    loginUser
}