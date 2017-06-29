// Get the element with the highest occurrence in an array

// A quick, non-optimized solution. It should be O(n).
// function highestOccurence(array) {
//   if(array.length == 0)
//     return null;
//
//   var modeMap = {};
//
//   var maxEl = array[0], maxCount = 1;
//
//   for(var i = 0; i < array.length; i++) {
//     var el = array[i];
//
//     if(modeMap[el] == null) {
//       modeMap[el] = 1;
//     } else {
//       modeMap[el]++;
//     }
//
//     if(modeMap[el] > maxCount) {
//       maxEl = el;
//       maxCount = modeMap[el];
//     }
//   }
//
//   return maxEl;
// }
function highestOccurence () {
  var arr = [].slice.call(arguments);
  if ((args.length == 1) && (typeof args[0] === "object")) {
    args = args[0].mode();
  }

  var obj = {};
  for(var i = 0; i < arr.length; i++) {
    if(obj[arr[i]] === undefined) obj[arr[i]] = 1;
    else obj[arr[i]]++;
  }

  var max = 0;
  for (w in obj) {
    if (obj[w] > max) max = obj[w];
  }

  ret_val = [];
  for (w in obj) {
    if (obj[w] == max) ret_val.push(w);
  }

  return ret_val;
}

var list = [1, 2, 3, 1, 3, 1, 3, 3, 5, 5, 1, 1];

console.log(highestOccurence(list));