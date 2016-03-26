var express = require('express');
var routes = express.Router();
var rootPath = require('app-root-path');
var database = require(rootPath + '/common/databaseHelper');
var Letter = require(rootPath + '/models/modelLetter');
var _ = require('lodash');

routes.get('/', function(req, res) {
	res.render('pages/main');
});

routes.get('/write', function(req, res) {
	res.render('pages/write', {letter: null});
});

routes.post('/newLetter', function(req, res) {
	var letter = {
		addressee: req.body.addressee,
		letterBody: req.body.letterBody,
		regards: req.body.regards,
		addresser: req.body.addresser
	};
	database.saveObject(letter,Letter);
	res.redirect('/read');
});

routes.get('/read', function(req,res){
	database.findObject({},Letter,function(result){
		res.render('pages/read', {letters: _.reverse(result)});
	});
});

routes.post('/deleteLetter', function(req,res){
	var letter = {
		_id: req.body._id
	};
	database.deleteObject(letter,Letter);
});

routes.post('/edit', function(req,res){
	var letter = {
		_id: req.body._id,
	};
	database.findObject(letter, Letter, function(result){
		res.render('pages/write', {letter: result});
	});
});

routes.post('/updateLetter', function(req,res){
	var query = {
		_id: req.body._id
	};
	var update = {
		addressee: req.body.addressee,
		letterBody: req.body.letterBody,
		regards: req.body.regards,
		addresser: req.body.addresser
	};
	database.updateObject(query,update,Letter);
	res.redirect('/read');
});

module.exports = routes;