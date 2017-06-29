// Consider the task of averaging a list of numbers.

// 1. Obtain the list of numbers.
// 2. Add up all of the numbers in the list by adding each number to a running sum.
// 3. Divide the sum by the number of values in the list.
// 4. Display the average.


const list = [92, 84, 70, 95, 100];

let sum = 0;
for (i = 0; i < list.length; i++) {
  sum = sum + list[i];
}

const average = sum / list.length;

console.log("The average is " + average);