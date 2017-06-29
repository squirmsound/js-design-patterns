function compareTrendingData(november, december) {

  var getResultByType = function(side, worth) {
    return side.split(' ').reduce(function(result, value, index) {
      return result + worth[index] * value;
    }, 0);
  };

  var result =
    getResultByType(november, [1, 2, 3, 3, 4, 10]) -
    getResultByType(december, [1, 2, 2, 2, 3, 5, 10]);

  return result > 0
    ? 'Battle Result: Good triumphs over Evil'
    : result < 0
        ? 'Battle Result: Evil eradicates all trace of Good'
        : 'Battle Result: No victor on this battle field';
}
