/*
 * Author: Alex Haefner
 * Date: 11.10.2021
 * Description: Employee model
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
const today = moment().format("MMM Do YYYY, h:mm:ss a");

let codeSchema = new Schema(
  {
    code: { type: String },

    date: { type: String, default: today },
  },

  { collection: "codes" }
);

module.exports = mongoose.model("Code", codeSchema);
