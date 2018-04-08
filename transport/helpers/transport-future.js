const futureRequest = require('../../lib/future-request')
const config = require('../../lib/config')
const getTime = require('./get-time')
const filterLessThanCurrentTime = require('./filter-less-than-current-time')
const timeFromNow = require('../../lib/time-from-now')
const formatToTime = require('../../lib/format-to-time')
const { map, compose } = require('ramda')

const auth = {
  Authorization: `apikey ${config.transportApiKey}`
}

const options = {
  uri: `https://api.transport.nsw.gov.au/v1/tp/departure_mon`,
  method: 'GET',
  headers: auth,
  qs: {
    outputFormat: 'rapidJSON',
    coordOutputFormat: 'EPSG:4326',
    type_dm: 'stop',
    name_dm: 'Samantha Riley Dr after Redden Dr, Kellyville NSW 2155',
    departureMonitorMacro: 'true',
    TfNSWDM: 'true',
    mode: 'direct',
    version: '10.2.1.42'
  }
}

const getBusTimetable =
  futureRequest(options)
    .chain(getTime)
    .chain(filterLessThanCurrentTime)
    .map(
      map(
        compose(
          timeFromNow,
          formatToTime
        )
      )
    )

module.exports =  {
  getBusTimetable
}