var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fakeDb = require('./fakes/db')(require('./fakes/fakeData'));

var courseTypes = fakeDb.courseTypes;
var courses = fakeDb.courses;


var indexRouter = require('./routes/index')(courseTypes);
var coursesRouter = require('./routes/courses')(courseTypes, courses);
var applyRouter = require('./routes/apply');
var detailsRouter = require('./routes/details');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  req.courses = fakeDb.courses;
  req.courseTypes = fakeDb.courseTypes;
  next();
});

app.use('/', indexRouter);
app.use('/courses', coursesRouter);
app.use('/apply', applyRouter);
app.use('/details', detailsRouter);

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
  res.render('error');
});

module.exports = app;
