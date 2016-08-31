// Find duplicate values in an array
// ------------------------------------------------------
var list = [1, 2, 3, 1, 3, 1];

var duplicates = list.reduce(function(acc, el, i, arr) {
  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0)
    acc.push(el); return acc;

}, []);

console.log(duplicates);
// = 1,3 (actual array == [1, 3])

// This doesn't need sorting or any third party framework.
// It also doesn't need manual loops.
// It works with every value indexOf() (or
// to be clearer: the strict comparision operator) supports.
