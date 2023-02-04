const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: '블로그 프로젝트' });
});


module.exports = router;
