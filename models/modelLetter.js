var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating a new 'Schema'
var letterSchema = new Schema({
	letterBody: String,
	created_at: Date
});

//before saving the letter to db, update created_at date
letterSchema.pre('save', function(next){
	this.created_at = new Date();
	next();
});

//Turning letterSchema into a 'Model' and export it
module.exports = mongoose.model('Letter',letterSchema);