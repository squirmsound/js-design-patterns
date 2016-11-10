'use strict'
const isEqual = require('lodash.isequal')
const clone = require('lodash.clone')
const logUpdate = require('log-update')

module.exports = class {
  constructor() {
    this.arrays = []
  }
  log(array) {
    if (!isEqual(this.array, array)) {
      this.array = clone(array)
      this.arrays.push(this.array)
    }
  }
  done() {
    let counter = 0
    const interval = setInterval(() => {
      logUpdate(this.arrays[counter].join(', '))
      counter++
      if (counter === this.arrays.length) {
        clearInterval(interval)
      }
    }, 250)
  }
}
