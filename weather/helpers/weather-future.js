const { compose, chain } = require('ramda')
const futureRequest = require('../../lib/future-request')
const config = require('../../lib/config')
const fork = require('../../lib/utils/future_utils/fork')

const options = state => {
  let query = state === 'weather' ? 'weather' : 'forecast'
  return ({
    uri: `http://api.openweathermap.org/data/2.5/${query}?id=6619279&APPID=${config.weatherApiKey}`,
    method: 'GET'
  })
}

const forecastFuture = res => fn =>
  compose(
    fork(res),
    chain(fn),
    futureRequest,
    options
  )

module.exports = forecastFuture