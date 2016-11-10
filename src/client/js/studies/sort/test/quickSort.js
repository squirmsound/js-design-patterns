'use strict'
const assert = require('assert')
const quickSort = require('../lib/quickSort')
console.log(quickSort)

describe('quick sort', () => {
  it('should sort correctly', () => {
    assert.deepEqual(quickSort([
      10,
      8,
      2,
      1,
      6,
      3,
      9,
      4,
      7,
      5
    ]), [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ])
  })
})
