const { prop, compose, head, assoc, objOf, path, of } = require('ramda')
const Future = require('fluture')

const getTempAndWeather = data =>
  compose(
    assoc(
      'weather',
      compose(
        x => ({
          main: prop('main', x),
          description: prop('description', x)
        }),
        head,
        prop('weather')
      )(data)
    ),
    objOf('temp'),
    path(['main', 'temp'])
  )(data)

const futureGetTempAndWeather =
  compose(
    Future.of,
    getTempAndWeather,
    JSON.parse
  )

module.exports = { 
  getTempAndWeather,
  futureGetTempAndWeather
}
