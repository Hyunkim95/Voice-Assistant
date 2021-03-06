const Future = require('fluture');
const request = require('request');

const futureRequest = data =>
  Future((rej, res) => {
    request(data, (err, response, body) => {
      err 
        ? rej(err) 
        : res(response.body)
    })
  })

module.exports = futureRequest
