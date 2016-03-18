var express = require('express');
var routes = express.Router();
var rootPath = require('app-root-path');

routes.get('/', function(req, res) {
	res.render('pages/main');
});

routes.get('/write', function(req, res) {
	res.render('pages/write');
});

module.exports = routes;