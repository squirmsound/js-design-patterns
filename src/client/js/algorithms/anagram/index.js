function isAnagram(a, b){
  var a = a.toLowerCase().split('').sort().join('');
  var b = b.toLowerCase().split('').sort().join('');
  // return (a == b) ? true : false;
  console.log('(A == B) ? TRUE : FALSE ---', (a == b) ? true : false)
}

isAnagram('cinema', 'iceman');
isAnagram('cinema', 'banana');