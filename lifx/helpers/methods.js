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

const alarm =
  lifxFuture('state')({
    method: 'PUT',
    body: JSON.stringify({
      power: 'on',
      duration: 1800.0,
      brightness: 1.0
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
  alarm
}