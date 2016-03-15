var express = require('express');
var routesMain = require('./Routes/routesMain');

var app = express();
var port = process.env.port || 9999;

app.use('/', routesMain);

app.listen(port, function(){
	console.log("Server has started running....");
});