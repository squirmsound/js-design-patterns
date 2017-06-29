function isIsogram(str){

  const chars = str.toLowerCase().split('');
  const charMap = [];

  chars.forEach(char => {
    if(charMap.indexOf(char) === -1) {
      charMap.push(char);
    }
  });

  return chars.length == charMap.length ? true : false;

}