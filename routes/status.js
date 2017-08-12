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

router.get('/access/statistic', function(req, res, next) {
    res.json({
        code: 0,
        msg: [
            {country: 'Afghanistan', num: 28397.812},
            {country: 'Angola', num: 19549.124},
            {country: 'Albania', num: 3150.143},
            {country: 'United Arab Emirates', num: 8441.537},
            {country: 'Argentina', num: 40374.224},
            {country: 'Armenia', num: 2963.496},
            {country: 'French Southern and Antarctic Lands', num: 268.065},
            {country: 'Australia', num: 22404.488},
            {country: 'Austria', num: 8401.924},
            {country: 'Azerbaijan', num: 9094.718},
            {country: 'Burundi', num: 9232.753},
            {country: 'Belgium', num: 10941.288},
            {country: 'Benin', num: 9509.798},
            {country: 'Burkina Faso', num: 15540.284},
            {country: 'Bangladesh', num: 151125.475},
            {country: 'Bulgaria', num: 7389.175},
            {country: 'The Bahamas', num: 66402.316},
            {country: 'Bosnia and Herzegovina', num: 3845.929},
            {country: 'Belarus', num: 9491.07},
            {country: 'Belize', num: 308.595},
            {country: 'Bermuda', num: 64.951}
        ]

});
});

module.exports = router;
