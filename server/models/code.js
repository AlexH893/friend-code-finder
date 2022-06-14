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
  var formattedDate = moment(d).format("MM-DD-YYYY, h:mm:ss a");
  return formattedDate;
};

let codeSchema = new Schema(
  {
    code: { type: String },
    createdAt: { type: String, default: createdAt },
    modified: { type: Date, default: createdAt },

    /* shows current day but no time default: d.toDateString()
     default: d.toString() displays full date and time with timezone  */
  },

  { collection: "codes" }
);

module.exports = mongoose.model("Code", codeSchema);
