'use strict'
const assert = require('assert')
const mergeSort = require('../lib/mergeSort')

describe('merge sort', () => {
  it('should sort correctly', () => {
    var numbers = [
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
    assert.deepEqual(mergeSort(numbers), [
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
