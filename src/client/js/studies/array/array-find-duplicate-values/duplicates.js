Array.prototype.duplicates = function() {
  var arr = this, obj = {}, item, output = [];

  for (item of arr) {
    if (obj.hasOwnProperty(item)) {
      obj[item] = parseInt(obj[item], 10) + 1;
    } else {
      obj[item] = 1;
    }
  }

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] > 1) {
        output.push(key);
      }
    }
  }
};

function duplicateCharacters(arr) {
  var dupeChars = {}, dupeCount = 0, duplicates = [];

  //Creates the specific KEYS in the 'dupeChars' object and assign them a 0 value
  //IMPORTANT - A variable CANT be named with a leading number, thus we add a _ to the KEY
  for (var i = 0; i < arr.length; i++) {
    dupeChars[String('_' + arr[i])] = 0;
  }

  //Increment the specific KEY/VALUE pair in the 'dupeChars' object
  for (var i = 0; i < arr.length; i++) {
    dupeChars[String('_' + arr[i])]++;
  }

  //Adds ONLY the duplicated values to the array, by scanning through the
  //object to find instances that have MORE then 1 in their Key/Value pair
  for (var key in dupeChars) {
    if (dupeChars[key] > 1) {
      duplicates[dupeCount] = key.slice(1);

      //slice off the _ from the key
      dupeCount++;
    }
  }

  return (
    'Original array: [' +
    arr +
    ']\n' +
    'Duplicate values: ' +
    duplicates
  );
}

duplicateCharacters([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]);
console.log('DUPLICATECHARACTERS([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6])', duplicateCharacters([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]))

