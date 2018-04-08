const moment = require('moment')

const mapToFormat = time => ({
  time: moment(time).format('LT'),
  text: moment(time).fromNow()
})

module.exports = mapToFormat