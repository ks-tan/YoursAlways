var express = require('express');
var routesMain = require('./Routes/routesMain');

var app = express();
app.set('port', (process.env.PORT || 5000));

// In routesMain.js, replace res.redirect method with res.render.
// Then, we may use 'ejs' templating engine.
// app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/', routesMain);

app.listen(app.get('port'), function(){
	console.log("Server has started running....");
});