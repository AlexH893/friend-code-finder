/*
 * Author: Alex Haefner
 * Date: 11.10.2021
 * Description: Employee model
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let codeSchema = new Schema(
  {
    code: { type: String },
  },

  { collection: "codes" }
);

module.exports = mongoose.model("Code", codeSchema);
