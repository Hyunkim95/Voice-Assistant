module.exports = fn =>
(req, res, next) =>
  fn
    .fork(console.log, body => res.send(body))