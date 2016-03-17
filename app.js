var express = require('express');
var routesMain = require('./Routes/routesMain');

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/', routesMain);

app.listen(app.get('port'), function(){
	console.log("Server has started running....");
});