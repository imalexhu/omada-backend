const User = require("./schemas/User");

const newUser = new User({ profileName: "devkosta", email: "devkosta@gmail.com" });

newUser.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});