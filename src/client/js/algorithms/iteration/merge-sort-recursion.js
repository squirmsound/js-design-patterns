function merge(left, right) {
  const result = [];

  while(left.length > 0 && right.length > 0){
    if(left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left).concat(right);
}

function mergeSort(items) {
  if (items.length === 1) {
    return items;
  }

  const middle = Math.floor(items.length / 2 ), left = items.slice(0, middle), right = items.slice(middel);

  return merge(mergeSort(left), mergeSort(right));
}

// The code for this merge sort if fairly simple and straightforward, but the mergeSort() function
// itslef ends up getting called very frequently.
// An Array of 'n' items ends up calling mergeSort() '2 * n-1' times, meaning that an array with
// more than 1,500 items would cause a stack overflow error in Firefox

