var express = require('express');
var routes = express.Router();
var rootPath = require('app-root-path');
var database = require(rootPath + '/common/databaseHelper');
var Letter = require(rootPath + '/models/modelLetter');

routes.get('/', function(req, res) {
	res.render('pages/main');
});

routes.get('/write', function(req, res) {
	res.render('pages/write');
});

//submitting new letter to database
routes.post('/newLetter', function(req, res) {
	var letter = {
		letterBody: req.body.letterBody
	};
	database.saveObject(letter,Letter);
});

module.exports = routes;