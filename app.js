var express = require('express');
var routesMain = require('./routes/routesMain');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public')); //place to server static files
app.use(bodyParser.urlencoded({ extended: true })); //for retrieving form data
app.use('/', routesMain);

/* for local deployment */
// mongoose.connect('mongodb://localhost/YoursAlways');

/* for heroku deployment */
mongoose.connect('mongodb://' + process.env.MONGOLAB_URI + '/YoursAlways');

app.listen(app.get('port'), function(){
	console.log("Server has started running....");
});