function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(value, index) {
    if(value != "" && ((minorWords.indexOf(value) === -1) || index == 0)) {
      value = value.split('');
      value[0] = value[0].toUpperCase();
      value = value.join('');
    }
    return value;
  }).join(' ');
}