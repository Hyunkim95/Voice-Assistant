const { merge, compose, ifElse, prop, equals, __, concat, evolve } = require('ramda')

module.exports = state => body => header =>
ifElse(
 b => equals('GET', prop('method', b)),
 merge(header),
 b => compose(
   merge(b),
   evolve({
     'uri': concat(__, `/${state}`)
    })
 )(header)
)(body)