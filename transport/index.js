const getMethod = require('../lib/utils/get-method')
const callbackConstructor = require('../lib/utils/callback-constructor')
const { getBusTimetable } = require('./helpers/transport-future')

const getBuses =
  getMethod({ 
    path: '/transport/bus', 
    fn: callbackConstructor(getBusTimetable)
  })


module.exports = {
  getBuses
}