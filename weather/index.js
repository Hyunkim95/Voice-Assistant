const getMethod = require('../lib/utils/get-method')
const { getForecast, getWeather } = require('./helpers/methods')
const callbackConstructor = require('../lib/utils/callback-constructor')

const getForecasts =
  getMethod({ 
    path: '/weather/forecast', 
    fn: callbackConstructor(getForecast)
  })

const getCurrentWeather =
  getMethod({ 
    path: '/weather/current', 
    fn: callbackConstructor(getWeather)
  })

module.exports = {
  getForecasts,
  getCurrentWeather
}