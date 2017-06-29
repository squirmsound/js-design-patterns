'use strict'
const noop = require('lodash.noop')

module.exports = (allNumbers, logger) => {
  !logger && (logger = {
    log: noop,
    done: noop,
  })

  function sort(numbers) {
    if (numbers.length <= 1) {
      return numbers
    }
    const pivot = numbers[numbers.length - 1]
    const left = []
    const right = []
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] < pivot) {
        left.push(numbers[i])
      }
      else {
        right.push(numbers[i])
      }
    }
    const results = [
      ...sort(left),
      pivot,
      ...sort(right),
    ]
    logger.log(results)
    logger.done()
    return results
  }
  return sort(allNumbers)
}
