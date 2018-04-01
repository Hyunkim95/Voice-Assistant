const { compose } = require('ramda')
const futureRequest = require('../../lib/future-request')
const lifxState = require('./lifx-state')
const fork = require('../../lib/utils/future_utils/fork')

const lifxFuture = option => res =>
  compose(
    fork(res),
    futureRequest,
    lifxState
  )(option)

module.exports = {
  lifxFuture
}