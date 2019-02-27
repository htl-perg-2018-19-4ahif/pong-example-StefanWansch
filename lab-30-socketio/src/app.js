"use strict";
exports.__esModule = true;
/**************************************************************************
  Demo for setting up a socket.io server with express
  NOTE: This code has not been optimized for size or speed. It was written
        with ease of understanding in mind.
**************************************************************************/
var express = require("express");
var http = require("http");
var path = require("path");
var sio = require("socket.io");
var app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));
var server = http.createServer(app);
var port = 8080;
server.listen(port, function () { return console.log("Server is listening on port " + port + "..."); });
// Handle the connection of new websocket clients
sio(server).on('connection', function (socket) {
    // Handle an ArrowKey event
    socket.on('ArrowKey', function (code) {
        console.log(code + " pressed");
        // Broadcast the event to all connected clients except the sender
        socket.broadcast.emit('ArrowKey', code);
    });
});
