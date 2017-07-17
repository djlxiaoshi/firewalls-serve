var express = require('express');
var router = express.Router();

/* GET CPU Loading Status. */
router.get('/cpu_usage', function(req, res, next) {
    res.json({
        "code": 0,
        "msg": {
            "cpu0": Math.random()*100,
            "cpu1": Math.random()*100,
            "cpu2": Math.random()*100,
            "cpu3": Math.random()*100,
        }
    });
});

/* GET CPU Temperature */
router.get('/cpu_temperature', function(req, res, next) {
    res.json({
        code: 0,
        msg: {
            "cpu0": [Math.random()*100, 35, 100],
            "cpu1": [Math.random()*100, 40, 100],
            "cpu2": [Math.random()*100, 45, 60],
            "cpu3": [Math.random()*100, 33, 60]
        }
    });
});

module.exports = router;
