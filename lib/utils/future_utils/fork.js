module.exports = res => future => 
  future.fork(
    console.log,
    body => 
      res.send(body)
  )