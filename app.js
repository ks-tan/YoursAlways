var express = require('express');
var routesMain = require('./routes/routesMain');
var mongoose = require('mongoose');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/', routesMain);

mongoose.connect('mongodb://localhost/YoursAlways');

var Letter = require('./models/modelLetter');
var newLetter = Letter({
	letterBody: 'Testing 123'
});
newLetter.save(function(err){
	if (err) {
		console.log("Error saving letter to database");
	}
	console.log('Letter saved');
});
Letter.find({},function(err,letters){
	if (err) {
		console.log("cannot erad from database");
	}
	console.log(letters);
});

app.listen(app.get('port'), function(){
	console.log("Server has started running....");
});