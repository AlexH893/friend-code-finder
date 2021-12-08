/*
 * Author: Alex Haefner
 * Date: 11.26.2021
 * Description: Contains REST APIs that allow for communication between application &
 * database, peforming CRUD functions
 */
var express = require("express");
const router = express.Router();
const Code = require("../models/code.js");

/*
 * FindAllCodes
 */
router.get("/codes", async (req, res) => {
  try {
    Code.find({}, function (err, codes) {
      if (err) {
        console.log(err);
        res.status(501).send({
          message: `MongoDB Exception: ${err}`,
        });
      } else {
        console.log(codes);
        res.json(codes);
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: `Server Exception: ${e.message}`,
    });
  }
});

/*
 * Submit code
 */
router.post("/codes", async (req, res) => {
  try {
    // The password to be hashed
    const newCode = {
      code: req.body.code,
      date: req.body.date,
    };

    await Code.create(newCode, function (err, code) {
      if (err) {
        console.log(err);
        res.status(501).send({
          message: `MongoDB Exception: ${err}`,
        });
      } else {
        console.log(code);
        res.json(code);
        console.log(
          "A new code has been added! They're code is " +
            req.body.code +
            ", it was submitted at " +
            req.body.date
        );
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: `Server Exception ${e.message}`,
    });
  }
});

module.exports = router;
