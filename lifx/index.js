const getMethod = require('../lib/utils/get-method')
const postMethod = require('../lib/utils/post-method')
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
  postMethod({ 
    path: '/lifx/on', 
    fn: callbackConstructor(turnOnLights)
  })

const turnOff = 
  postMethod({ 
    path: '/lifx/off', 
    fn: callbackConstructor(turnOffLights)
  })

const turnLightToDefault = 
  postMethod({ 
    path: '/lifx/default', 
    fn: callbackConstructor(setToDefault)
  })

module.exports = {
  getLifx,
  turnOn,
  turnOff,
  turnLightToDefault
}