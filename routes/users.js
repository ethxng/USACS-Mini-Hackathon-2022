var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send("response with a resource");
  res.render('form');
});

module.exports = router;
