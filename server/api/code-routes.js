/*
 * Author: Alex Haefner
 * Date: 11.26.2021
 * Description: Contains REST APIs that allow for communication between application &
 * database, peforming CRUD functions
 */
var express = require("express");
const router = express.Router();
const Code = require("../models/code.js");
const moment = require("moment");

// GET all codes
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
    }).sort({ createdAt: -1 });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: `Server Exception: ${e.message}`,
    });
  }
});

// POST code
router.post("/codes", async (req, res) => {
  try {
    // The code to be submitted
    const newCode = {
      code: req.body.code.replace(/\s/g, ""),
      date: req.body.date,
      modified: req.body.date,
      name: req.body.name,
      vivillion: req.body.vivillion,
      flagged: req.body.flagged,
      ip: req.body.ip,
    };

    await Code.create(newCode, function (err, code) {
      if (err) {
        console.log(err);

        res.status(501).send({
          message: `Duplicate code, codes will refresh every 24 hours`,
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

// PUT update code, incrementing flagged property
router.put("/codes/:id", async (req, res) => {
  try {
    // Find the code document to be updated
    const codeToUpdate = await Code.findById(req.params.id);

    if (!codeToUpdate) {
      return res.status(404).send({ message: "Code not found" });
    }

    // Update the flagged property to 1
    codeToUpdate.flagged += 1;

    // Save the updated code document
    const updatedCode = await codeToUpdate.save();

    res.json(updatedCode);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: `Server Exception ${e.message}`,
    });
  }
});

module.exports = router;
