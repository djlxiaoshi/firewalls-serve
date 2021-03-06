var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var admin = require('./routes/admin');
var dhcp = require('./routes/dhcp');
var dns = require('./routes/dns');
var rules = require('./routes/rules');
var firewalls = require('./routes/firewalls');
var userConfig = require('./routes/userConfig');
var vpn = require('./routes/vpn');
var misc_stat = require('./routes/status');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 跨域解决

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080")
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', true)
    //res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS"){
        return res.sendStatus(204)
    } else {
        return next()
    }
})


app.use('/', index);
app.use('/admin', admin);
app.use('/dhcp', dhcp);
app.use('/dns', dns);
app.use('/fw', firewalls);
app.use('/vpn', vpn);
app.use('/rules', rules);
app.use('/user', userConfig);
app.use('/', misc_stat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/*
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

module.exports = app;
