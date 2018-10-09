// LOAD DATA

var friends = require("../data/friends");

// ROUTING

module.exports = function(app) {
  // API GET Request

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Request
  

  app.post("/api/friends", function(req, res) {
    // req.body is available since we're using the body parsing middleware
        var bestfriendid = 0;
        var bestfriendscore = 100;
        for (i=0; i < friends.length; i++) {
            var friendscore = 0;
            for (n=0; n < 10; n++) {                
                friendscore = (friendscore + Math.abs(req.body.scores[n] - friends[i].scores[n]));                     
            }
            if (friendscore < bestfriendscore) {
                bestfriendscore = friendscore;
                bestfriendid = i;
            }
        }
        res.json(friends[bestfriendid]);
        friends.push(req.body);
  });
};