'use strict'
const assert = require('assert')
const insertionSort = require('../lib/insertionSort')

describe('insertion sort', () => {
  it('should sort correctly', () => {
    const numbers = [
      10,
      5,
      3,
      8,
      2,
      6,
      4,
      7,
      9,
      1,
    ]
    insertionSort(numbers)
    assert.deepEqual(numbers, [
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
