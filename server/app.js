/*
 * Author: Alex Haefner
 * Date: 11.27.2021
 * Description: Contains app configurations
 * Sources:
 */

/**
 * Require statements
 */

const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const createError = require("http-errors");
const Router = express.Router();
let codeRoutes = require("./api/code-routes.js");
var cors = require("cors");

/**
 * App configurations
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "../dist/friend-code-finder")));
app.use(
  "/",
  express.static(path.join(__dirname, "../dist/friend-code-finder"))
);
/**
 * Variables
 */

const conn =
  "mongodb+srv://admin:admin@buwebdev-cluster-1.8auop.mongodb.net/pogo?retryWrites=true&w=majority";

/**
 * Database connection
 */
mongoose
  .connect(conn, {
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
 * API(s) go here
 */

app.use("/api", codeRoutes);

/**
 * Create and start server

http.createServer(app).listen(port, function () {
  console.log(`Application started and listening on port: ${port}`);
}); */

app.listen(process.env.PORT || 3000, function () {
  console.log("Application is running at localhost:" + app.get("port"));
});
