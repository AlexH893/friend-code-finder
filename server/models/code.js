/*
 * Author: Alex Haefner
 * Date: 11.10.2021
 * Description: Employee model
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

var createdAt = function () {
  var d = new Date();
  return d;
};

let codeSchema = new Schema(
  {
    code: { type: String },
    createdAt: { type: Date, default: createdAt },
    modified: { type: Date, default: createdAt },
    name: { type: String },
    vivillion: { type: String },
    /* shows current day but no time default: d.toDateString()
     default: d.toString() displays full date and time with timezone  */
  },

  { collection: "codes" }
);

module.exports = mongoose.model("Code", codeSchema);
