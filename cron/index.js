const CronJob = require('cron').CronJob;
const { getBusTimetable } = require('../transport/helpers/transport-future')
const { getWeather } = require('../weather/helpers/methods')

const cron = () =>
  new CronJob('* * * * * *', function() {
    console.log('You will see this message every second');
  }, null, true, 'America/Los_Angeles');

const getWeatherCron = () =>
  new CronJob('00 30 07 * * 1-5', function() {
    getWeather.fork(console.log, console.log)
  }, null, true, 'Australia/Sydney')

module.exports = {
  getWeatherCron
}