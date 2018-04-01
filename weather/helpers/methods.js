const weatherFuture = require('./weather-future')
const reduceList = require('./reduce-list')
const { futureGetTempAndWeather } = require('./get-temp-and-weather')

const getForecast =
  weatherFuture('forecast')
    .chain(reduceList)

const getWeather = 
  weatherFuture('weather')
    .chain(futureGetTempAndWeather)

module.exports = {
  getForecast,
  getWeather
}