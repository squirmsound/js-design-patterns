const quickSort = require('./lib/quickSort')
const Snapshot = require('./util/Snapshot')

const snapshot = new Snapshot()
quickSort([
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
], snapshot)
