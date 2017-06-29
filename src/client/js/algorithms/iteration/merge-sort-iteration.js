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

  const work = [];

  for (let i = 0, len = items.length; i < len; i++) {
    work.push([items[i]]);
  }

  work.push([]); // in case of odd numbers of items

  for (let lim = len; lim > 1; lim = (lim+1)/2) {
    for(let j = 0, k = 0; k <lim; j++, k+=2){
      work[j] = merge(work[k], work[k + 1]);
    }

    work[j] = []; // in case of odd number of items

  }

  return work[0];
}

// The code for this merge sort if fairly simple and straightforward, but the mergeSort() function
// itslef ends up getting called very frequently.
// An Array of 'n' items ends up calling mergeSort() '2 * n-1' times, meaning that an array with
// more than 1,500 items would cause a stack overflow error in Firefox

