function XO(str) {
  var a = str.replace(/x/gi, ''),
      b = str.replace(/o/gi, '');
  return a.length === b.length;
}