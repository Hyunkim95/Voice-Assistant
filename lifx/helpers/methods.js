const { lifxFuture } = require('./lifx-future')

const getLights =
  lifxFuture()({ method: 'GET' })

const turnOnLights =
  lifxFuture('state')({
    method: 'PUT',
    body: JSON.stringify({
      power: 'on'
    })
  })

const turnOffLights =
  lifxFuture('state')({
    method: 'PUT',
    body: JSON.stringify({
      power: 'off'
    })
  })

const setToDefault = 
  lifxFuture('state')({
    method: 'PUT',
    body: JSON.stringify({
      power: 'on',
      color: '#F3ECDB'
    })
  })

module.exports = {
  getLights,
  turnOffLights,
  turnOnLights,
  setToDefault,
}