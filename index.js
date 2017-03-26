var express = require("express");

var app = express();
var http = require('http').Server(app);
var path = require("path");

var abs = function(file) {
    return path.resolve(file);
};



app.get('/', function(req, res) {
    res.sendFile(abs("./index.html"));
});

app.use("/static",
    express.static("./static"));

app.use("/bower_components",
    express.static("./bower_components"));

http.listen(process.env.PORT || 3000, function() {
    console.log('listening on * : 3000 ');
});
