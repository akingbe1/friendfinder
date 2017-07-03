//link route to "friends" file
var friends = require("../data/friends.js");


//shows the friend on the friend link and posts a new friend to the array
module.exports = function(app) {
	
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		
		var newFriendsScore = req.body.scores;
		var scoresArray = [];
		var friendCount = 0;
		var bestMatch = 0;

		for (var i = 0; i < friends.length; i++) {
			console.log(friends[i].name);
			var scoreDiff = 0;
			
			for (var j = 0; j < newFriendsScore[i].length[j]; j++) {
				scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendsScore[j])));
			}
		scoresArray.push(scoreDiff);

		}

		for (var i = 0; i < scoresArray.length; i++) {
			if (scoresArray[i] <= scoresArray[bestMatch]) {
				bestMatch = i;
			}
		}

		var bestFriend = friends[bestMatch];
		res.json(bestFriend);

		friends.push(req.body);

	});
	
};