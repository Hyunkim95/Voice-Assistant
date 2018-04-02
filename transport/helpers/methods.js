const { getBusTimetable } = require('./transport-future')
const { compose, find, isNil } = require('ramda')

// TODO: set alert for next bus when asked
// const checkBusTimeTable =
//   getBusTimetable
//     .chain(
//       compose(
//         when(

//         ),
//         find(equals(getCurrentTime)) 
//       )
//     )