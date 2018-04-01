const { 
  reduce, 
  compose, 
  prop, 
  objOf, 
  path, 
  assoc,
  head, 
  append,
  __ 
} = require('ramda')
const { getTempAndWeather } = require('./get-temp-and-weather')
const Future = require('fluture')

const reduceList =
  compose(
    Future.of,
    reduce(
      (acc, current) => 
        compose(
          append(__, acc),
          getTempAndWeather
        )(current)
      ,
      []
    ),
    prop('list'),
    JSON.parse
  )

module.exports = reduceList