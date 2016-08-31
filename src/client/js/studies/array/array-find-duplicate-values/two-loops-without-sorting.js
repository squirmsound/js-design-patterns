// Find duplicates
var _findDuplicates = function (arr) {
  var h = [], t = [];
  arr.forEach(function (n) {
    if (h.indexOf(n) == -1)
      h.push(n);
    else t.push(n);
  });
  return [h, t];
}
var result = _findDuplicates(["test",1,4,2,34,6,21,3,4,"test","prince","th",34]);
console.log("Has duplicate values : " + (result[1].length > 0))
//and you can check count of duplicate values
console.log(result[0]) //unique values
console.log(result[1]) //duplicate values