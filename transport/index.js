const postMethod = require('../lib/utils/post-method')
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