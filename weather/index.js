const getMethod = require('../lib/utils/get-method')
const getWeatherForecast = require('./helpers/weather-future')

const getWeather =
  getMethod({ path: '/weather', fn: getWeatherForecast })

module.exports = {
  getWeather
}