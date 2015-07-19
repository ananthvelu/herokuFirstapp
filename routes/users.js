var express = require('express');
var router = express.Router();

// respond with "Hello World!" on the homepage
router.get('/', function (req, res) {
		  res.render('index', { title: 'Anand\'s learning in Photography' });
		  });
module.exports = router;
