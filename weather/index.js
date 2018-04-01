const getMethod = require('../lib/utils/get-method')
const { getForecast, getWeather } = require('./helpers/methods')

const getForecasts =
  getMethod({ path: '/weather/forecast', fn: getForecast })

const getCurrentWeather =
  getMethod({ path: '/weather/current', fn: getWeather })

module.exports = {
  getForecasts,
  getCurrentWeather
}