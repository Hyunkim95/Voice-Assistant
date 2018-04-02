const CronJob = require('cron').CronJob;
const { getBusTimetable } = require('../transport/helpers/transport-future')
const { getWeather } = require('../weather/helpers/methods')
const { alarm } = require('../lifx/helpers/methods')
const getCurrentTime = require('../lib/utils/get-current-time')

const getWeatherCron = () =>
  new CronJob('00 30 07 * * 1-5', function() {
    getWeather.fork(console.log, console.log)
  }, null, true, 'Australia/Sydney')

// const getBusTimetableCron = () => 
//   new CronJob('00 15 07 * * 1-5', function() {
//     getBusTimetable
//       .map(
//         x => 
//           moment(x)
//             .subtract(5, 'minutes')
//             .format('HHmm')
//       )
//   }, null, true, 'Australia/Sydney')  

const setAlarm = () => 
  new CronJob('00 00 06 * * 1-5', function() {
    alarm.fork(console.log, console.log)
  }, null, true, 'Australia/Sydney')  

module.exports = {
  getWeatherCron,
  setAlarm
}