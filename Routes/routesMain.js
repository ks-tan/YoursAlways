var express = require('express');
var routes = express.Router();

routes.get('/', function(req, res) {
    res.send('im the home page!');  
});

routes.get('/about', function(req, res) {
    res.send('im the about page!'); 
});

module.exports = routes;