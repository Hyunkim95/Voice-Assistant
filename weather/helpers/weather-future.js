const { compose, chain } = require('ramda')
const futureRequest = require('../../lib/future-request')
const config = require('../../lib/config')
const fork = require('../../lib/utils/future_utils/fork')
const reduceList = require('./reduce-list')

const options = {
  uri: `http://api.openweathermap.org/data/2.5/forecast?id=6619279&APPID=${config.weatherApiKey}`,
  method: 'GET'
}

const weatherFuture = res =>
  compose(
    fork(res),
    chain(
      reduceList
    ),
    futureRequest
  )(options)

const getWeatherForecast = (req, res, next) =>
  weatherFuture(res)

module.exports = getWeatherForecast