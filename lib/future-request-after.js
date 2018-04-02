const Future = require('fluture');
const request = require('request');

const futureRequestAfter = after => data =>
  Future.after(after, (rej, res) => {
    request(data, (err, response, body) => {
      err 
        ? rej(err) 
        : res(response.body)
    })
  })

module.exports = futureRequestAfter
