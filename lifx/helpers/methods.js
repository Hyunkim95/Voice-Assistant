const { lifxFuture } = require('./lifx-future')

const getLights =
  lifxFuture({ method: 'GET' })

const turnOnLights =
  lifxFuture({
    method: 'PUT',
    body: JSON.stringify({
      power: 'on'
    })
  })

const turnOffLights =
  lifxFuture({
    method: 'PUT',
    body: JSON.stringify({
      power: 'off'
    })
  })

module.exports = {
  getLights,
  turnOffLights,
  turnOnLights
}