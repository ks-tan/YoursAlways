var databaseHelper = {

	saveObject: function(object,model){
		var modelObject = new model(object);
		modelObject.save(function(err){
			if (err) {
				console.log("Problem saving " + object + " to db");
			}
			console.log(object + " successfully saved to db");
		});
	},

	findObject: function(object,model,returnResult){
		model.find(object, function(err, result){
			if (err) {
				console.log("Error finding " + object + " from db");
			}
			returnResult(result);
		});
	}

};

module.exports = databaseHelper;