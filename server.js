
var express = require("express");

var app = express();
var mongoose = require('mongoose');

var express = require('express');
var app = express();
// Require path
var path = require("path");
// Require body-parser (to receive post data from clients)
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, "./static")));

app.get('/', function(req, res) {
    res.render('index');
});



// Setting Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})





















