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


 /**
  * App configurations
  */
 let app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(morgan("dev"));
 app.use(cors());
 app.use(express.static(path.join(__dirname, "../dist/test/browser"))); //gofriendcodes is heroku app name, needs changed eventually
 app.use("/", express.static(path.join(__dirname, "../dist/test")));
 /**
  * Variables
  */

 const MONGODB_URI =
   "mongodb+srv://admin:admin@buwebdev-cluster-1.8auop.mongodb.net/pogo?retryWrites=true&w=majority";

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
  * API(s) go here
  */

 app.use("/api", codeRoutes);
 app.use(compression());
 /**
  * Create and start server

 http.createServer(app).listen(port, function () {
   console.log(`Application started and listening on port: ${port}`);
 }); */

 app.listen(process.env.PORT || 3000, function () {
   console.log("Application is running at localhost:" + app.get("port"));
 });
