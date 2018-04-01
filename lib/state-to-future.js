const futureRequest = require('../lib/future-request')
const lifxState = require('../lifx/helpers/lifx-state')
const fork = require('./utils/future_utils/fork')
const config = require('./config')

const auth = {
  Authorization: `Bearer ${config.token}`
}

const options = {
  uri: 'https://api.lifx.com/v1/lights/all',
  headers: auth
}

const lifxFuture = option => res =>
  compose(
    fork(res),
    futureRequest,
    lifxState
  )(option)

module.exports = {
  lifxFuture
}