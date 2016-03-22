var databaseHelper = {

	saveObject: function(object,model){
		var modelObject = new model(object);
		modelObject.save(function(err){
			if (err) {
				console.log("Problem saving " + object + " to db");
			}
		});
	},

	findObject: function(object,model,returnResult){
		model.find(object, function(err, result){
			if (err) {
				console.log("Error finding " + object + " from db");
				return;
			}
			returnResult(result);
		});
	},

	deleteObject: function(object,model){
		model.findOneAndRemove(object,function(err){
			if (err) {
				console.log("Error deleting " + object + " from db");
				return;
			}
		});
	}

};

module.exports = databaseHelper;