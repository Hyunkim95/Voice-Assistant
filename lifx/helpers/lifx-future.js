const { compose } = require('ramda')
const futureRequest = require('../../lib/future-request')
const futureRequestAfter = require('../../lib/future-request-after')
const lifxState = require('./lifx-state')
const fork = require('../../lib/utils/future_utils/fork')

const lifxFuture = state =>
  compose(
    futureRequest,
    lifxState(state)
  )

module.exports = {
  lifxFuture
}