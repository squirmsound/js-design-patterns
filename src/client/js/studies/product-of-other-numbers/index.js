exports.getProductsOfOtherNums = (integers) => {
  var productsOfOtherNums = [];

  // for each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  integers.forEach((integer, index) => {
    productsOfOtherNums[index] = productSoFar;
    productSoFar *= integer;
  });

  productSoFar = 1;
  for (var j = integers.length - 1; j >= 0; j--) {
    productsOfOtherNums[j] *= productSoFar;
    productSoFar *= integers[j];
      console.log('PRODUCTSOFOTHERNUMS REVERSE', productsOfOtherNums)
      console.log('PRODUCTSOFAR REVERSE', productSoFar)

  }

  return productsOfOtherNums;
};
