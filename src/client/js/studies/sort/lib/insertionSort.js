'use strict'
const noop = require('lodash.noop')

module.exports = (numbers, logger) => {
  !logger && (logger = {
    log: noop,
    done: noop,
  })
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      logger.log(numbers)
      if (numbers[i] < numbers[j]) {
        numbers.splice(j, 0, numbers.splice(i, 1)[0])
      }
    }
  }
  logger.done()
}
