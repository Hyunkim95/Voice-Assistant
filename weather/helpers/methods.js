const { compose, assoc, always, path, toLower } = require('ramda')
const weatherFuture = require('./weather-future')
const reduceList = require('./reduce-list')
const { futureGetTempAndWeather } = require('./get-temp-and-weather')
const { lifxFuture } = require('../../lifx/helpers/lifx-future')

const weatherColour = ({
  clear: 'red'
})

const getForecast =
  weatherFuture('forecast')
    .chain(reduceList)

const getWeather = 
  weatherFuture('weather')
    .chain(futureGetTempAndWeather)
    .chain(
      x => compose(
        lifxFuture,
        assoc(
          'body',
          compose(
            JSON.stringify,
            y => ({
              power: 'on',
              color: y
            }),
            z => weatherColour[z],
            toLower,
            path(['weather', 'main'])
          )(x)
        ),
        always({
          method: 'PUT'
        })
      )(x)
    )

module.exports = {
  getForecast,
  getWeather
}