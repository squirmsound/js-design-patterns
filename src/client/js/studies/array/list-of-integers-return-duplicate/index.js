// I need to check a JavaScript array to see if there are any duplicate values.
// What's the easiest way to do this?
// I just need to find what the duplicated values are -
// I don't actually need their indexes or how many times they are duplicated.

var data = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted = data.slice().sort();

// You can define the comparing function here.
// JS by default uses a crappy string compare.
// (we use slice to clone the array so the
// original array won't be modified)

var results = [];
for (var i = 0; i < data.length - 1; i++) {
  if (sorted[i + 1] == sorted[i]) {
    results.push(sorted[i]);
  }
}

console.log(results);

// You could sort the array and then run through it
// and then see if the next (or previous) index is the same as the current.
// Assuming your sort algorithm is good, this should be less than O(n2):



// clone array
// sort new array
// create a new array for results
// loop over each item and continue as long as the current index wont be larger than the length of the array.

// check if check to see if the current index is equal to the next index, if it is, push that index to the results array.



