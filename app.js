var express = require('express');
var routesMain = require('./routes/routesMain');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routesMain);

mongoose.connect('mongodb://localhost/YoursAlways');

app.listen(app.get('port'), function(){
	console.log("Server has started running....");
});