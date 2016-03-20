var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var letterSchema = new Schema({
	letterBody: String,
	created_at: Date
});

//before saving the letter to db, update created_at date
letterSchema.pre('save', function(next){
	this.created_at = new Date();
	next();
});

module.exports = mongoose.model('letter',letterSchema);