var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fakeDb = require('./fakes/db')(require('./fakes/fakeData'));

var indexRouter = require('./routes/index');
var coursesRouter = require('./routes/courses');
var applyRouter = require('./routes/apply');
var detailsRouter = require('./routes/details');
var adminRouter = require('./routes/admin');

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
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  
  
  res.locals.title = "Ошибка";
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const status = err.status || 500;
  // render the error page
  res.status(status);
  
  if (status == 404) {
    res.locals.message = "ресурс не найден";
  } else {
    res.locals.message = "что-то пошло не так. Попробуйте еще раз позже."
  }

  const logEntry = {
    url: req.url,
    time: new Date(),
    err: err,
    status: status    
  };
  
  console.error(logEntry);

  res.render('error');
});

module.exports = app;
