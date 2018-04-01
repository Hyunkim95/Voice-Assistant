module.exports = res => future => 
  future.fork(
    console.log, 
    x => 
      res.send(x)
  )