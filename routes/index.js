var express = require('express');
var router = express.Router();

var riot = require('riot');
var hello = require('../tags/hello-world.tag');


router.get('/', function(req, res) {
  var startingName = 'Susan';
  var tagOutput = riot.render(hello, { firstName: startingName });
  res.render('index', { tagContent: tagOutput, firstName: startingName });
});

// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
//   })
// );

router.get('/import/', function(req, res) {
  res.render('import');
});

router.get('/test/', function(req, res) {
  res.render('test');
});


module.exports = router;
