const { merge, compose, ifElse, prop, equals, __, concat, evolve } = require('ramda')
const futureRequest = require('../lib/future-request')
const { modify } = require('crocks/State')
const config = require('./config')

const auth = {
  Authorization: `Bearer ${config.token}`
}

const options = {
  uri: 'https://api.lifx.com/v1/lights/all',
  headers: auth
}

const appendUrlAndMerge = body => header =>
  ifElse(
   b => equals('GET', prop('method', b)),
   merge(header),
   b => compose(
     merge(b),
     evolve({'uri': concat(__, '/state')})
   )(header)
  )(body)

const mergeOptions = body =>
  modify(appendUrlAndMerge(body))
    .execWith(options)

const lifxFuture = option => res =>
  compose(
    future => 
      future.fork(
        console.log, 
        x => 
          res.send(x)
      ),
    futureRequest,
    mergeOptions
  )(option)

module.exports = {
  lifxFuture
}
