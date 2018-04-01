const { modify } = require('crocks/State')
const appendUrlAndMerge = require('./append-url-and-merge')

module.exports = body =>
  modify(appendUrlAndMerge(body))
    .execWith(options)