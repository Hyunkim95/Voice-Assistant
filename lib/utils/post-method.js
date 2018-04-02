const appMethod = require('./app-methods')

module.exports = ({ path, fn }) => 
  app => 
    appMethod({
      path,
      fn
    })({
      app,
      method: 'post'
    })