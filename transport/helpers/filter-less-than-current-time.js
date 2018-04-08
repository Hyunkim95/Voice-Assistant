const { compose, filter, lt } = require('ramda')
const currentTime = require('../helpers/current-time')
const Future = require('fluture')

const filterLessThanCurrentTime =
  compose(
    Future.of,
    filter(
      lt(currentTime)
    ) 
  )

module.exports = filterLessThanCurrentTime