const getMethod = require('../lib/utils/get-method')
const { 
  getLights, 
  turnOnLights, 
  turnOffLights 
} = require('./helpers/methods')

const getLifx =
  getMethod({ path: '/lifx', fn: getLights })

const turnOn = 
  getMethod({ path: '/lifx/on', fn: turnOnLights })

const turnOff = 
  getMethod({ path: '/lifx/off', fn: turnOffLights })

module.exports = {
  getLifx,
  turnOn,
  turnOff
}