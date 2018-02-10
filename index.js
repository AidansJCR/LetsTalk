// Imports
const express = require('express');
const path = require('path');

// Global Objects
var app = express();
var currentDirectory = (process.env.PORT) ? process.cwd() : __dirname;

app.set('port', 3000);

// serve the client
app.use(express.static(path.join(currentDirectory, "client")));
app.use("/libs", express.static(path.join(currentDirectory, "node_modules")));

// API


// Socket.io chat stuff


// 404 error
app.get("*", (req, res) => {
  res.status(404).send("file not found");
});

app.listen(app.get('port'), () => {
  console.log("server started on port " + app.get('port'));
});
