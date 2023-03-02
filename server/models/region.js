const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

let regionSchema = new Schema(
  {
    name: { type: String },
    vivillion: { type: String },
  },

  { collection: "codes" }
);

module.exports = mongoose.model("Region", regionSchema);
