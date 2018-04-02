const { compose, chain, prop, map, filter, path, equals, __ } = require('ramda')
const moment = require('moment')
const Future = require('fluture')

module.exports =
compose(
  Future.of,
  map(
    x => 
      moment(prop('departureTimePlanned', x))
  ),
  filter(
    compose(
      equals('617X'),
      path(['transportation', 'disassembledName'])
    )
  ),
  prop('stopEvents'),
  JSON.parse
)