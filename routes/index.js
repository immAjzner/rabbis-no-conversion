var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.isEnglish = req.query.lang === 'en';
  res.render('index',  { title: 'Express' });
});

module.exports = router;
