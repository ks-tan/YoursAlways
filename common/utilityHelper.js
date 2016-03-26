var utilityHelper = {

	formatDate : function(currentDate){
		var date = currentDate.getDate();
		var monthIndex = currentDate.getMonth();
		var month = ['','January','February','March','April','May','June',
					'July','August','September','October','November','December'];
		var year = currentDate.getFullYear();
		var hours = currentDate.getHours() <= 12 ? currentDate.getHours() : currentDate.getHours()%12;
		var timePostfix = currentDate.getHours() <= 12 ? 'am' : 'pm'	
		var minutes = currentDate.getMinutes();
		return date + ' ' + month[monthIndex] + ' ' + year + ', ' + hours + ':' + minutes + ' ' + timePostfix;
	}

};

module.exports = utilityHelper;