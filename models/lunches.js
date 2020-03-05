const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lunchSchema = new Schema({
    lunchName: { type: String, required: true }
});

const Lunches = mongoose.model("Lunches", lunchSchema);

module.exports = Lunches;

