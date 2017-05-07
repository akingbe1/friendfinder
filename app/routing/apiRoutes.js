var possibleFriends = require("../data/friends");

module.exports = function(app) {
	
	app.get("/api/friends", function(req, res) {
		res.json(possibleFriends);
	});

	app.post("/api/friends", function(req, res) {
		possibleFriends.push(req.body);
	})
	
}