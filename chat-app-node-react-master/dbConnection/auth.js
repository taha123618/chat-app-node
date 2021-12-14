const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdOn: { "type": Date, "default": Date.now },
    activeSince: Date
});

var UserModel = mongoose.model("chatAppUsers", userSchema);

module.exports = UserModel