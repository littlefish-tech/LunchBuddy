const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userLunchesSchema = new Schema({

    //name make like name1
    name: { type: Schema.Types.ObjectId, required: true }

    //userxId: (user1, make a placeholder string)(skip this for now)
    //lunchxId:
})

const UserLunches = mongoose.model("UserLunches", userLunchesSchema);

module.exports = UserLunches;