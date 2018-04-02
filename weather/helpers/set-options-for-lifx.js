const { compose, assoc, path, always, toLower } = require('ramda')
const { lifxFuture } = require('../../lifx/helpers/lifx-future')
const weatherState = require('./weather-state')

module.exports = weatherObject =>
  compose(
    lifxFuture('state'),
    assoc(
      'body',
      compose(
        JSON.stringify,
        main => weatherState(main),
        toLower,
        path(['weather', 'main'])
      )(weatherObject)
    ),
    always({
      method: 'PUT'
    })
  )(weatherObject)