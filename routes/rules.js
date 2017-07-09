/**
 * Created by DJL箫氏 on 2017/6/16.
 */
var express = require('express');
var router = express.Router();

/* GET DNS Data. */
router.get('/get', function(req, res, next) {
    res.json({
        "code": 0,
        "msg": {
            "enable_open_ports": 1,
            "blacklist": [
                "192.168.99.99"
            ],
            "open_ports": [
                "tcp/22"
            ],
            "enable_blacklist": 1
        }
    });
});

/* Post DNS page. */
router.post('/modify', function(req, res, next) {
    res.json({
        "code": 0,
        msg: 'Success'
    });
});

module.exports = router;
