/**
 * Created by DJL箫氏 on 2017/6/16.
 */
var express = require('express');
var router = express.Router();

/* GET DNS Data. */
router.get('/get', function(req, res, next) {
    res.json({
        "code": 0,
        msg: {
            forwarders: [
                "114.114.114.114",
                "8.8.8.8"
            ],
            domain_maps: {
                domain:  "server.test.com",
                ip: "192.168.90.1"
            }
        }
    });
});

/* Post DNS page. */
router.post('/modify', function(req, res, next) {
    res.json({
        "code": 0
    });
});

module.exports = router;
