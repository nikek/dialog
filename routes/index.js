var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res) {
  var startingName = 'Susan';
  var tagOutput = riot.render(hello, { firstName: startingName });
  res.render('index', { tagContent: tagOutput, firstName: startingName });
});

module.exports = router;