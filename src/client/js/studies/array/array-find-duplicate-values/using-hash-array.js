var list  = [
  'hello',
  'goodbye',
  'foo',
  'hello',
  'foo',
  'bar',
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3
];

var hashtable = [];
var x = list.length;

// build hashtable
for (x; x--;){
  if (typeof hashtable[list[x]] === 'undefined') {
    hashtable[list[x]] = [];
  }
  hashtable[list[x]].push(x);
}
// work with compiled hashtable (not necessary)
var duplicates = [];

for (var key in hashtable){
  if (hashtable.hasOwnProperty(key) && hashtable[key].length > 1){
    duplicates.push(key);
  }
}

console.log(duplicates);

// NOTE: The result will be the hash array, which will contain both a unique set of values and the position of those values.
// NOTE: So if there are 2 or more positions, we can determine that the value has a duplicate.
// NOTE: Thus, every place hash[<value>].length > 1, signifies a duplicate.
// NOTE: hash['hello'] will return [0,3] because 'hello' was found in node 0 and 3 in arr[].

// NOTE: the length of [0,3] is what's used to determine if it was a duplicate.
// NOTE: Using
// for(var key in hash) {
//  if (hash.hasOwnProperty(key)){
      // alert(key);
    // }
  // }
// will alert each unique value.