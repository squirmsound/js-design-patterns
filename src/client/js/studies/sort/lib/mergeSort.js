'use strict'
const noop = require('lodash.noop')

module.exports = (allNumbers, logger) => {
  !logger && (logger = {
    log: noop,
    done: noop,
  })
  function sort(numbers) {
    if (numbers.length < 2) {
      return numbers
    }
    const length = numbers.length
    const middle = Math.floor(length / 2)
    const left = numbers.slice(0, middle)
    const right = numbers.slice(middle, length)
    return stitch(sort(left), sort(right), logger)
  }
  return sort(allNumbers)
}

function stitch(left, right, logger) {
  const results = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    }
    else {
      results.push(right.shift())
    }
  }
  logger.log(results)
  while (left.length) {
    results.push(left.shift())
  }
  while (right.length) {
    results.push(right.shift())
  }
  logger.log(results)
  logger.done()
  return results
}
