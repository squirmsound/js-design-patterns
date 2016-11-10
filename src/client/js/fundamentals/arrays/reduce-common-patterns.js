// Reduce it into another array where every value is doubled.
// We can say var doubled equals data.reduce.
// The initial value for our accumulator is going to be a new array.
// All we're going to do is say accumulator.push value times two.
// Then we need to make sure that we return the accumulator.
function reduceDoubler() {
  var data = [ 1, 2, 3];

  var dataDoubled = data.reduce(function(accumulator, value) {
    accumulator.push(value * 2);

    return accumulator;
  }, []);

  console.log('REDUCE USING .reduce() : RESULTS : ', dataDoubled);

};
reduceDoubler();

function reduceMapDoubler() {
  var data = [ 1, 2, 3];

  var dataDoubled = data.map(function(item) {
    return item * 2;
  });

  console.log('REDUCE USING .map()  : RESULTS : ', dataDoubled);

};


// Learn how two common array functions - map() and filter() -
// are syntactic sugar for reduce operations. Learn how to use them,
// how to compose them, and how using reduce can give you a big
// performance boost over composing filters and maps over a large data set.