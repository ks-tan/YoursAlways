var databaseHelper = {

	saveObject: function(object,model){
		var modelObject = new model(object);
		modelObject.save(function(err){
			if (err) {
				console.log("Problem saving " + object + " to db");
			}
			console.log(object + " successfully saved to db");
		});
	}

};

module.exports = databaseHelper;