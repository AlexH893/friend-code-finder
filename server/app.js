/*
 * Author: Alex Haefner
 * Date: 11.27.2021
 * Description: Contains app configurations
 * Sources:
 */

/**
 * Require statements
 */
require("dotenv").config({ path: "../db.env" });
const express = require("express");
var compression = require("compression");
const http = require("http");
var cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const createError = require("http-errors");
const { Router } = require("express");
let codeRoutes = require("./api/code-routes.js");
//let regionRoutes = require("./api/region-routes.js");

/**
 * App configurations
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../dist/test/browser")));
app.use("/", express.static(path.join(__dirname, "../dist/test")));
app.use(cors());

const MONGODB_URI = process.env.DBCON;

/**
 * Database connection
 */
mongoose
  .connect(MONGODB_URI, {
    promiseLibrary: require("bluebird"),
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.debug(`Connection to the database instance was successful`);
  })
  .catch((err) => {
    console.log(`MongoDB Error: ${err.message}`);
  }); // end mongoose connection

/**
 * API(s)
 */

app.use("/api", codeRoutes);
app.use(compression());

app.listen(process.env.PORT || 3000, function () {
  console.log("Application is running at localhost:" + app.get("port"));
});
