const appMethods = ({ path, fn }) => ({ 
  app,
  method,
}) => 
  app[method](path, fn)

module.exports = appMethods