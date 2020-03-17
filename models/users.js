const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

const userSchema = new Schema({
    username: { type: String, required: true },
    // email: { type: String, required: true },
    password: { type: String, required: true }
});

const Users = mongoose.model("Users", userSchema);

Users.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
Users.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});

module.exports = Users;