var utilityHelper = {

	formatDate : function(currentDate){
		return currentDate.toLocaleDateString('en-US',
			{ 
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric' 
			})
			+ ', '
			+ currentDate.toLocaleTimeString('en-us',
			{
				hour: '2-digit',
				minute:'2-digit'
			});
	}

};

module.exports = utilityHelper;