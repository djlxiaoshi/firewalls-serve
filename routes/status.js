var express = require('express');
var router = express.Router();

/* GET CPU Loading Status. */
router.get('/misc_stat/cpu_usage', function(req, res, next) {
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
router.get('/misc_stat/cpu_temperature', function(req, res, next) {
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

router.get('/misc_stat/iface_speed', function(req, res, next) {
    res.json({
        code: 0,
        msg: {
            "cpu0": [Math.random()*300, Math.random()*500],
            "cpu1": [Math.random()*300, Math.random()*500],
            "cpu2": [Math.random()*300, Math.random()*500],
            "cpu3": [Math.random()*300, Math.random()*500]
        }
    });
});

// 认证访问实时列表
router.get('/access/get_list', function(req, res, next) {
    res.json({
        code: 0,
        msg: {
           list:[{
               "time": "2017-06-06 15:35:16",
               "src": "19.18.102.10",
               "country": "CN",
               "username": "user@11.com",
               "packet_len": 425,
               "elapsed": 11,
               "code": 0,
               "result": "successfully"
           },{
               "time": "2017-07-05 15:35:16",
               "src": "192.168.102.10",
               "country": "-",
               "username": "user@11.com",
               "packet_len": 42500,
               "elapsed": 11,
               "code": -123,
               "result": "the authenication packet is too long"
           },{
               "time": "2017-08-05 15:35:16",
               "src": "192.168.102.10",
               "country": "-",
               "username": "user@11.com",
               "packet_len": 42500,
               "elapsed": 11,
               "code": -123,
               "result": "the authenication packet is too long"
           }],
            "total": 2,
            "cur": 1
        }
    });
});

module.exports = router;
