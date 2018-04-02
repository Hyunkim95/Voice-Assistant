const weatherKeys = {
  thunderstorm: '#764D93',
  drizzle: '#2C7594',
  rain: '#122742',
  snow: '',
  atmosphere: '',
  clear: '#E4E9F4',
  clouds: '#4A4A4C',
  extreme: '',
  additional: ''
}

module.exports = x => ({
  color: weatherKeys[x],
  power: 'on',
  duration: 10.0
})