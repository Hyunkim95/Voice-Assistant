const getMethod = require('../lib/utils/get-method')
const callbackConstructor = require('../lib/utils/callback-constructor')
const { 
  getLights, 
  turnOnLights, 
  turnOffLights,
  setToDefault
} = require('./helpers/methods')

const getLifx =
  getMethod({ 
    path: '/lifx', 
    fn: callbackConstructor(getLights)
  })

const turnOn = 
  getMethod({ 
    path: '/lifx/on', 
    fn: callbackConstructor(turnOnLights)
  })

const turnOff = 
  getMethod({ 
    path: '/lifx/off', 
    fn: callbackConstructor(turnOffLights)
  })

const turnLightToDefault = 
  getMethod({ 
    path: '/lifx/default', 
    fn: callbackConstructor(setToDefault)
  })

module.exports = {
  getLifx,
  turnOn,
  turnOff,
  turnLightToDefault
}