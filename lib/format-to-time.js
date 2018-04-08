const moment = require('moment')

const formatToTime = time => 
  moment.unix(time).format()

module.exports = formatToTime