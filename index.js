// Imports
const express = require('express');
const path = require('path');
// Global Objects
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var currentDirectory = (process.env.PORT) ? process.cwd() : __dirname;

app.set('port', 3000);

// serve the client
app.use(express.static(path.join(currentDirectory, "client")));
app.use("/libs", express.static(path.join(currentDirectory, "node_modules")));

// API


// Socket.io chat stuff
io.on('connection', (socket) => {
  console.log("A Connection");
});

// 404 error
app.get("*", (req, res) => {
  res.status(404).send("file not found");
});

http.listen(3000, () => {
  console.log("server listening on 3000");
});
