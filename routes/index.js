var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  setLocals(res, req, false);
  res.render('index-he',  { title: 'הצהרה רבנית' });
});

/* GET home page. */
router.get('/en', function(req, res, next) {
  setLocals(res, req, true);
  res.render('index-en',  { title: 'Rabbinic statement' });
});

const setLocals = (res, req, isEnglish) => {
  res.locals.isEnglish = isEnglish;
  res.locals.isMobile = req.header('user-agent').includes('Mobile');
};

module.exports = router;
