// If you want to elimate the duplicates, try this great solution:
var data = [9, 9, 111, 2, 3, 4, 4, 5, 7];

function eliminateDuplicates(arr) {
  var i, len = arr.length, out = [], obj = {};

  for (i = 0;i < len; i++) {
    obj[arr[i]] = 0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}
console.log(eliminateDuplicates(data));

// The code above (which is mine--that's my blog) gets you pretty close. A small tweak and you're there. First of all, you can see if arr.length and out.length are the same. If they are the same, there are no duplicated elements. But you want a little more. If you want to "catch" the dupes as they happen, check to see if the length of the array increases after the obj[arr[i]]=0 line. Nifty, eh? :-) Thanks for the nice words, Raphael Montanaro.

// This algorithm also has the side effect of returning a sorted array, which might not be what you want.

