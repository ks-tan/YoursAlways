var express = require('express');
var routes = express.Router();
var rootPath = require('app-root-path');

routes.get('/', function(req, res) {
	res.render('pages/main');
});

routes.get('/write', function(req, res) {
	res.render('pages/write');
});

//submitting new letter to database
routes.post('/newLetter', function(req, res) {
	var db = req.db;
	var letterBody = req.body.letterBody;
	var lettersCollection = db.get('lettersCollection');
	lettersCollection.insert({
		'letterBody':letterBody
	},
	function(err,doc){
		if (err) {
			res.send('There was a problem adding the information to the database');
		} else {
			res.render('pages/write');
		}
	});
});

module.exports = routes;