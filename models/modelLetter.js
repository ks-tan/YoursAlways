var rootPath = require('app-root-path');
var utils = require(rootPath + '/common/utilityHelper');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var letterSchema = new Schema({
	addressee: String,
	letterBody: String,
	regards: String,
	addresser: String,
	created_at: String
});

//before saving the letter to db, update created_at date
letterSchema.pre('save', function(next){
	this.created_at = utils.formatDate(new Date());
	next();
});

module.exports = mongoose.model('letter',letterSchema);