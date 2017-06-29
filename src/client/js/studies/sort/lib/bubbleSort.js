'use strict'
const noop = require('lodash.noop')

module.exports = (numbers, logger) => {
  !logger && (logger = {
    log: noop,
    done: noop,
  })
  let swapped = true
  logger.log(numbers)
  while (swapped) {
    swapped = false
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        const temp = numbers[i]
        numbers[i] = numbers[i + 1]
        numbers[i + 1] = temp
        swapped = true
      }
      logger.log(numbers)
    }
  }
  logger.done()
}
