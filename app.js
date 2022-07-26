var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expresslayouts = require('express-ejs-layouts');
var fileUploads = require('express-fileupload'); 
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

var trangchuRouter = require('./routes/trangchu/trangchu');
var addstudentRouter = require('./routes/Sinhvien/addSinhvien');
var editstudentRouter = require('./routes/Sinhvien/editSinhvien');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('layout', './index');
app.set('view engine', 'ejs');
app.use(expresslayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(fileUploads());
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', trangchuRouter);
app.use('/addstudent', addstudentRouter);
app.use('/editstudent', editstudentRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err)
});

module.exports = app;
