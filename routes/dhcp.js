var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/get', function(req, res, next) {
    res.json({
        "code": 0,
        "msg": {
            "fixed_ips": {
                "00:0c:29:7c:04:5f": "192.168.90.13"
            },
            "range": [
                "192.168.90.2",
                "192.168.90.122"
            ],
            "net": "192.168.90.1"
        }
    });
});

router.post('/modify', function(req, res, next) {
    res.json({
        "code": 0,
        "msg": 'Success'
    });
});

module.exports = router;
