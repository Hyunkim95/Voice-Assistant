const { compose } = require('ramda')
const futureRequest = require('../../lib/future-request')
const lifxState = require('./lifx-state')
const fork = require('../../lib/utils/future_utils/fork')

const lifxFuture = 
  compose(
    futureRequest,
    lifxState
  )

module.exports = {
  lifxFuture
}