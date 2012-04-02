#!/usr/bin/env node

var express = require("express"),
  app = express.createServer();

//Use Express' Static Server To Serve The Public Directory
app.use(express.static(__dirname + '/../public')).listen(4000);

console.log('\r\nNode server running at http://localhost:%d\r\n', 4000);
