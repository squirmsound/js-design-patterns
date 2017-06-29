// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
export default function reduceArrToObject() {
  var likes = [
    'angular',
    'angular',
    'vanilla',
    'react',
    'react',
    'react',
    'angular',
    'angular',
    'ember',
    'backbone',
  ];

  var initialValue = {};

  // accumulator - previously returned accumulator value
  var reducer = function(likes, like) {
    if (!likes[like]) {
      likes[like] = 1;
    } else {
      likes[like] = likes[like] + 1;
    }
    return likes;
  };

  var result = likes.reduce(reducer, initialValue);
  console.log('RESULTS', result);

};
