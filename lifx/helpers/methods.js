const { lifxFuture } = require('./lifx-future')

const getLights = (req, res, next) => 
  lifxFuture({ method: 'GET' })(res)

const turnOnLights = (req, res, next) =>
  lifxFuture({
    method: 'PUT',
    body: JSON.stringify({
      power: 'on'
    })
  })(res)

const turnOffLights = (req, res, next) =>
  lifxFuture({
    method: 'PUT',
    body: JSON.stringify({
      power: 'off'
    })
  })(res)

module.exports = {
  getLights,
  turnOffLights,
  turnOnLights
}