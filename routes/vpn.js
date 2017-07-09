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
            province: "Hubei",
            city: "Wuhan city",
            org: "bitmain",
            email: "test@bitmain",
            department: "Software center",
            enable: 1
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

/* 证书下载 */
router.get('/generate_client_certs', function(req, res, next) {
    res.json({
        "code": 0,
        msg: 'Success'
    });
});


module.exports = router;
