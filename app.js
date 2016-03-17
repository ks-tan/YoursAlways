var express = require('express');
var routesMain = require('./Routes/routesMain');
var favicon = require('serve-favicon');

var app = express();
var port = process.env.port || 9999;

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(__dirname + '/public'));
app.use('/', routesMain);

app.listen(port, function(){
	console.log("Server has started running....");
});