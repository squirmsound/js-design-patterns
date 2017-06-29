// Note: You need to use JSON library for browser that's not supported JSON.

function eliminateDuplicates(arr) {
  var len = arr.length, out = [], obj = {};

  for (var key, i=0; i < len; i++) {
    key = JSON.stringify(arr[i]);
    obj[key] = (obj[key]) ? obj[key] + 1 : 1;
  }
  for (var key in obj) {
    out.push(JSON.parse(key));
  }
  return [out, obj];
}