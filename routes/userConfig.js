'use strict'
var express = require('express');
var uuidV1 = require('uuid/v1');
var router = express.Router();

router.get('/get_list', function(req, res, next) {
    res.json({
        msg: {
            user:{
                list: [{
                    uid: 'BlB4gSLIT4A4lCrs5FzgGa',
                    name: 'djlxs',
                    perms: ['tcp/22',  'tcp/24', 'udp/22',  'udp/24']
                },{
                    uid: 'BlB4gSLIT4A4lCrs5FzgGb',
                    name: 'djl',
                    perms: ['tcp/22',  'udp/24']
                },{
                    uid: 'BlB4gSLIT4A4lCrs5FzgGc',
                    name: 'lxl',
                    perms: [ 'udp/22',  'udp/24']
                }],
                total: '3',
                cur: '1'
            },
            perms_list: ['tcp/22', 'tcp/23', 'tcp/24', 'udp/22', 'udp/23', 'udp/24']
        },
        code: 0
    });
});

router.get('/get_perms', function(req, res, next) {
    var _uid = req.query.uid
    // todo 数据库查询
    res.json({
        msg: {
            uid: _uid,
            perms: ['tcp/22',  'tcp/24', 'udp/22',  'udp/24'],
            name: 'djlxs'
        },
        code: 0
    });
});

router.post('/add', function(req, res, next) {
    var _name = req.body.name
    var _perms = req.body.perms
    // todo 数据库查询
    res.json({
        msg: {
            uid: uuidV1(),
            name: _name,
            perms: _perms
        },
        code: 0
    });
});


router.post('/modify', function(req, res, next) {
    var _uid = req.body.uid
    var _name = req.body.name
    var _perms = req.body.perms
    console.log('用户权限', req.body)
    // todo 数据库修改
    res.json({
        'code': 0,
        'msg': {
            uid: _uid,
            name: _name,
            perms: _perms
        }
    });
});

router.post('/delete', function(req, res, next) {
    var _uid = req.body.uid
    // todo 数据库删除操作
    console.log('删除操作UID', _uid)
    res.json({
        'code': 0,
        'msg': 'Success'
    });
});

router.get('/download_key', function(req, res, next) {
    var _uid = req.query.uid
    // todo 数据库删除操作
    console.log('删除操作UID', _uid)
    res.json({
        'code': 0,
        'msg': 'Success'
    });
});
module.exports = router;
