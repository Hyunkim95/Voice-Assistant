const appMethods = ({ 
  app,
  method,
  path,
  fn
}) =>
  app[method](path, fn)

module.exports = appMethods