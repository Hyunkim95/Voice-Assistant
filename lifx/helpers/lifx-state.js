const { modify } = require('crocks/State')
const appendUrlAndMerge = require('./append-url-and-merge')
const config = require('../../lib/config')

const auth = {
  Authorization: `Bearer ${config.token}`
}

const options = {
  uri: 'https://api.lifx.com/v1/lights/all',
  headers: auth
}

module.exports = state => body =>
  modify(appendUrlAndMerge(state)(body))
    .execWith(options)