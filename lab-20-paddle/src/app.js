"use strict";
exports.__esModule = true;
/**************************************************************************
  Just the usual express.js setup...
  NOTE: This code has not been optimized for size or speed. It was written
        with ease of understanding in mind.
**************************************************************************/
var express = require("express");
var path = require("path");
var app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));
var port = 8090;
app.listen(port, function () { return console.log("Server is listening on port " + port + "..."); });
