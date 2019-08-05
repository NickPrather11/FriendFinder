app.get("/api/friends", function(req, res) {
  return res.json(friendsArray);
});

app.post("/api/tables", function(req, res) {
  //convert input from form to object and push said object to friendsArray
  //COMPATABILITY LOGIC
});
