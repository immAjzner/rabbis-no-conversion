var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const isEnglish = req.query.lang === 'en';
  res.locals.isEnglish = isEnglish;
  res.render('index',  { title: isEnglish ? 'Rabbinic statement' : 'הצהרה רבנית' });
});

module.exports = router;
