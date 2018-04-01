const appMethods = require('../lib/utils/app-methods')
const { 
  getLights, 
  turnOnLights, 
  turnOffLights 
} = require('./methods')

const getLifx = app =>
  appMethods({ 
    app,
    method: 'get',
    path: '/',
    fn: getLights
  })

const turnOn = app => 
  appMethods({ 
    app,
    method: 'get',
    path: '/on',
    fn: turnOnLights
  })

const turnOff = app => 
  appMethods({ 
    app,
    method: 'get',
    path: '/off',
    fn: turnOffLights
  })

module.exports = {
  getLifx,
  turnOn,
  turnOff
}
