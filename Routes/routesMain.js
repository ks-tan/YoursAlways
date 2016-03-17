var express = require('express');
var routes = express.Router();
var rootPath = require('app-root-path');

routes.get('/', function(req, res) {
    // res.sendFile(rootPath + '/public/views/main.html');
    res.redirect('/views/main.html');
});

routes.get('/login', function(req, res) {
    res.sendFile(rootPath + '/public/views/login.html');
});

module.exports = routes;