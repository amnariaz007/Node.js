const express = require("express"),
  app = express();

//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {
  res.render("index");
});

//route for magic page
app.get("/magic", function (req, res) {
  res.render("magic");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000 ");
});