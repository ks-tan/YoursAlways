var express = require('express');
var routesMain = require('./Routes/routesMain');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/', routesMain);
// app.get('/', function(req, res) {
//     res.render('pages/main');
// });

app.listen(app.get('port'), function(){
	console.log("Server has started running....");
});