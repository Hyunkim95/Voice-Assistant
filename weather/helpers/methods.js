const forecastFuture = require('./weather-future')
const reduceList = require('./reduce-list')
const { futureGetTempAndWeather } = require('./get-temp-and-weather')

const getForecast = (req, res, next) =>
  forecastFuture(res)(reduceList)('forecast')

const getWeather = (req, res, next) =>
  forecastFuture(res)(futureGetTempAndWeather)('weather')

module.exports = {
  getForecast,
  getWeather
}