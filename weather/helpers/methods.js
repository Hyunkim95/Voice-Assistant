const { always } = require('ramda')
const weatherFuture = require('./weather-future')
const reduceList = require('./reduce-list')
const { futureGetTempAndWeather } = require('./get-temp-and-weather')
const setOptionsForLifx = require('./set-options-for-lifx')
const { setToDefault } = require('../../lifx/helpers/methods')

const getForecast =
  weatherFuture('forecast')
    .chain(reduceList)

const getWeather = 
  weatherFuture('weather')
    .chain(futureGetTempAndWeather)
    .chain(setOptionsForLifx)

const getWeatherData = 
  weatherFuture('weather')
    .chain(futureGetTempAndWeather)

module.exports = {
  getForecast,
  getWeather,
  getWeatherData
}