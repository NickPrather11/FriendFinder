var friendsArray = require("../data/friends");
function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    //convert input from form to object and push said object to friendsArray
    //COMPATABILITY LOGIC
  });
}

module.exports = apiRoutes;
