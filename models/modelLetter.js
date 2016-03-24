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
	var currentDate = new Date();
	var date = currentDate.getDate();
	var monthIndex = currentDate.getMonth();
	var month = ['','January','February','March','April','May','June',
				'July','August','September','October','November','December'];
	var year = currentDate.getFullYear();
	var hours = currentDate.getHours() <= 12 ? currentDate.getHours() : currentDate.getHours()%12;
	var timePostfix = currentDate.getHours() <= 12 ? 'am' : 'pm'	
	var minutes = currentDate.getMinutes();
	this.created_at = date + ' ' + month[monthIndex] + ' ' + year + ', ' 
					+ hours + ':' + minutes + ' ' + timePostfix;
	next();
});

module.exports = mongoose.model('letter',letterSchema);