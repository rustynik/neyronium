const   createError = require('http-errors'),
        express = require('express'),
        path = require('path'),
        cookieParser = require('cookie-parser'),
        logger = require('morgan'),
        app = express(),
        redis = require('redis'),
        cache = require('express-redis-cache');

const   settings = require('./services/settings').read(process.cwd(), process.env.CONFIGURATION),
        db = require("./services/mongodbDatabase")(settings.mongodb);

app.set('app-settings', settings);

const guestRouter = require('./routes/index')(app, require('express').Router()),
  applyRouter = require('./routes/apply'),
  detailsRouter = require('./routes/details'),
  adminRouter = require('./routes/admin')(app, require('express').Router());

let redisClient, redisCache
if (settings.cache.useCache) {
  console.log(process.env.REDIS_URL || settings.cache.connectionString);
  redisClient = redis.createClient(process.env.REDIS_URL || settings.cache.connectionString);
  redisClient.flushall();
  redisCache = cache({ client: redisClient });
}

app.set('services', {
  notify: require('./services/email/notify'),
  cache: redisCache,
  redisClient
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger(settings.logLevel || 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  
  req.courses = db.courses;
  req.courseTypes = db.courseTypes;
  
  // no need to inject services into app
  req.services = app.get('services');
  req.app = app;

  next();
});

app.use('/', guestRouter);
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
