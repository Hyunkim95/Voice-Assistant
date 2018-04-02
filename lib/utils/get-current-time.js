const moment = require('moment')

module.exports = () =>
  moment()
    .format('HHmm')