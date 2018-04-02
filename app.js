var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { 
  getLifx,
  turnOn,
  turnOff,
  turnLightToDefault
 } = require('./lifx');

const { 
   getForecasts,
   getCurrentWeather
} = require('./weather');

const {
  getBuses
} = require('./transport')

const {
  getWeatherCron
} = require('./cron')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

getLifx(app)
turnOn(app)
turnOff(app)
turnLightToDefault(app)

getForecasts(app)
getCurrentWeather(app)

getBuses(app)

getWeatherCron()

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;