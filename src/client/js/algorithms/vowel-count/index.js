function getCount(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}