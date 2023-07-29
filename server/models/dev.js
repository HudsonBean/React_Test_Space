const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devSchema = new Schema({
  message: {
    type: String,
    requried: true,
  },
});

const dev = mongoose.model("dev", devSchema);

module.exports = dev;
