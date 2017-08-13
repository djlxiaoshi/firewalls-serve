var express = require('express');
const uuidV1 = require('uuid/v1');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  res.json({
    code: 0,
    msg: 'Success'
  });
});

/* GET users logout. */
router.post('/logout', function(req, res, next) {
    res.json({
        code: 0,
        msg: 'Success'
    });
});

module.exports = router;
