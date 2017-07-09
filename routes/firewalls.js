/**
 * Created by DJL箫氏 on 2017/6/16.
 */
var express = require('express');
var router = express.Router();

/* GET Firewalls Data. */
router.get('/get', function(req, res, next) {
    res.json({
        code: 0,
        msg: {
            port_mapping: {
                protocol: 'tcp',
                port: '22',
                service_name: 'ssh@firewall',
                ip: '192.168.99.12:30'
            },
            "max_packet_time": 60,
            "listen_port": 62201
        }
    });
});

/* Post Firewalls page. */
router.post('/modify', function(req, res, next) {
    res.json({
        "code": 0
    });
});

module.exports = router;

