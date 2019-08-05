var express = require("express"),
  path = require("path"),
  app = express(),
  PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
