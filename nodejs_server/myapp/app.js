var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/studentRoutes');
const admissionStaffRouter = require('./routes/admissionstaffRoutes');
const studentRouter = require('./routes/studentRoutes');
const examRouter = require('./routes/examRoutes');
const emailRouter = require('./routes/emailRoutes');

const mongoose = require('mongoose');
 const mongodbUri = 'mongodb://merih:me2am1@ds029630.mlab.com:29630/online_examination';
//const mongodbUri = 'mongodb://localhost:27017/online_examination';

// working for token
var passport = require('passport');
require('./api/models/db');
require('./api/config/passport');
var routesApi = require('./api/routes/index');


//......configuring cors
var corsOptions = {
  origin: 'http://localhost:4200',
  credentials:true,
  methods:['GET', 'PUT', 'POST'],
  allowedHeaders:'Content-Type',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

}
var app = express();
app.use(cors(corsOptions));
//....


mongoose.connect(mongodbUri)
const db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/staff', admissionStaffRouter);
app.use('/student', studentRouter);
app.use('/exam', examRouter);
app.use('/email', emailRouter);

//my code
//Initialise Passport before using the route middleware
app.use(passport.initialize());
//  Use the API routes when path starts with /api
app.use('/api', routesApi);

app.use('*', (req, resp, next) => {
  req.conn = db;
  return next();
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connection to database is created');
});
//end of my code

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.listen(8000, function () {
  console.log('Listening at port 8000');
});