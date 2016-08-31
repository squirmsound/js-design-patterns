// This is my answer from the duplicate thread (!):

// Got tired of seeing all bad examples with for-loops or jQuery. Javascript has the perfect tools for this nowadays: sort, map and reduce.

// Find duplicate items

var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

var uniq = names
.map((name) => {
  return {count: 1, name: name}
})
.reduce((a, b) => {
  a[b.name] = (a[b.name] || 0) + b.count
  return a
}, {})

var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

console.log(duplicates)
// [ 'Nancy' ]

// More functional syntax:

// @Dmytro-Laptin pointed out some code code be removed. This is a more compact version of the same code. Using some ES6 tricks and higher order functions:

const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

const count = names =>
  names.reduce((a, b) =>
    Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

const duplicates = dict =>
  Object.keys(dict).filter((a) => dict[a] > 1)

console.log(count(names))
// { Mike: 1, Matt: 1, Nancy: 2, Adam: 1, Jenny: 1, Carl: 1 }
console.log(duplicates(count(names)))
// [ 'Nancy' ]