const { 
  reduce, 
  compose, 
  prop, 
  objOf, 
  path, 
  assoc,
  head, 
  append,
  __ 
} = require('ramda')
const Future = require('fluture')

const reduceList =
  compose(
    Future.of,
    reduce(
      (acc, current) => 
        compose(
          append(__, acc),
          assoc(
            'weather',
            compose(
              x => ({
                main: prop('main', x),
                description: prop('description', x)
              }),
              head,
              prop('weather')
            )(current)
          ),
          objOf('temp'),
          path(['main', 'temp'])
        )(current)
      ,
      []
    ),
    prop('list'),
    JSON.parse
  )

module.exports = reduceList