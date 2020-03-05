const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lunchSchema = new Schema({
    lunchName: { type: String, required: true }
});

const Lunch = mongoose.model("Lunch", lunchSchema);

module.exports = Lunch;

