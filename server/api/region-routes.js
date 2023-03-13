/*
 * Author: Alex Haefner
 * Date: 11.26.2021
 * Description: Contains REST APIs that allow for communication between application &
 * database, peforming CRUD functions
 */
var express = require("express");
const router = express.Router();
const Region = require("../models/region.js");

// GET all regions
router.get("/regions", async (req, res) => {
  try {
    Region.find({}, function (err, regions) {
      if (err) {
        console.log(err);
        res.status(501).send({
          message: `MongoDB Exception: ${err}`,
        });
      } else {
        console.log(regions);
        res.json(regions);
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: `Server Exception: ${e.message}`,
    });
  }
});

// POST region
router.post("/regions", async (req, res) => {
  try {
    // The region to be submitted
    const newRegion = {
      name: req.body.name,
      vivillion: req.body.vivillion,
    };

    await Region.create(newRegion, function (err, region) {
      if (err) {
        console.log(err);
        res.status(501).send({
          message: `MongoDB Exception: ${err}`,
        });
      } else {
        console.log(region);
        res.json(region);
        console.log(
          "A new region has been added! They're region is " + req.body.name
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
