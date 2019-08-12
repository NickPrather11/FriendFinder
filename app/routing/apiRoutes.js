var friendsArray = require("../data/friends");

function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    //convert input from form to object and push said object to friendsArray
    //COMPATABILITY LOGIC
    var newUser = req.body;
    var indexOfClosestUser = compatability(newUser);
    friendsArray.push(newUser);
    res.json(newUser);
    console.log("Best Friend: " + friendsArray[indexOfClosestUser].name);
  });
}

function compatability(newUser) {
  var newUserTotalScore = 0;
  for (i = 0; i < newUser.scores.length; i++) {
    newUserTotalScore += parseInt(newUser.scores[i]);
  }

  var totalsArr = [];
  var diffArr = [];
  for (i = 0; i < friendsArray.length; i++) {
    var ansSum = 0;
    for (n = 0; n < friendsArray[i].scores.length; n++) {
      ansSum += parseInt(friendsArray[i].scores[n]);
    }
    totalsArr.push(ansSum);
    diffArr.push(Math.abs(newUserTotalScore - ansSum));
  }
  var smllstNum = diffArr[0];
  var friendex;
  for (i = 0; i < diffArr.length; i++) {
    if (diffArr[i] < smllstNum) {
      smllstNum = diffArr[i];
      friendex = i;
    }
  }

  return friendex;
}

module.exports = apiRoutes;
