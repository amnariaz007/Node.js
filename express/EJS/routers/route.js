const router = require('express').Router();

router.get("/", function (req, res) {
    res.render("index");
  });

  router.get("/magic", function (req, res) {
    res.render("magic");
  });

  router.get("/about", function (req, res) {
    res.render("about");
  });
  module.exports = router;