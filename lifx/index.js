const getMethod = require('../lib/utils/get-method')
const { 
  getLights, 
  turnOnLights, 
  turnOffLights 
} = require('./methods')

const getLifx =
  getMethod({ path: '/', fn: getLights })

const turnOn = 
  getMethod({ path: '/on', fn: turnOnLights })

const turnOff = 
  getMethod({ path: '/off', fn: turnOffLights })

module.exports = {
  getLifx,
  turnOn,
  turnOff
}