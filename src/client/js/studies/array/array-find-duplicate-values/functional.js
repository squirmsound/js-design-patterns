// Find duplicate values in an array
var list = [1, 2, 3, 1, 3, 1];

// Write a function
// ------------------------------------------------------
function findDuplicates(data) {
  var all = {};
  return data.reduce(function( duplicates, value ) {
    if( all[value] ) {
      duplicates.push(value);
      all[value] = false;
    } else if( typeof all[value] == "undefined" ) {
      all[value] = true;
    }
    return duplicates;
  }, []);
}

function findDuplicatesVb(arr) {
  var i = 0, m = [];
  return arr.filter(function (n) {
    return !m[n] * ~arr.indexOf(n, m[n] = ++i);
  });
}

console.log(findDuplicates(list));
console.log(findDuplicatesVb(list));


// This doesn't need sorting or any third party framework.
// It also doesn't need manual loops.
// It works with every value indexOf() (or
// to be clearer: the strict comparision operator) supports.
