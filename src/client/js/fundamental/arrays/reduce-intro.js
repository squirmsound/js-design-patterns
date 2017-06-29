// @flow
export default function reduceIntro() {

  // The callback. ONLY GETS CALLED IF THERE IS ANY DATA IN ARRAY
  const reducer = function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  };

  // The initial value
  let previousValue = 0;
  let currentValue = null;
  let currentIndex = null;
  // The data to be transformed
  const data = [15, 3, 20];


  const transformedData = data.reduce(reducer, previousValue, currentValue, currentIndex);

  console.log('THE TRANSFORMED DATA:', transformedData);

};

// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

// accumulator - previously returned accumulator value
