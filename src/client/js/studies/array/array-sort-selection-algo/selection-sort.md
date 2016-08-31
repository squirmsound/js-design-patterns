### Selection sort is an in-place comparison sort.
##### The algorithm divides the input array into two parts:
1. the subarray of items already sorted, which is built up from left to right, and
2. the subarray of items remaining to be sorted that occupy the rest of the array.

Initially, the sorted subarray is empty and the unsorted subarray is the entire input array. The algorithm proceeds by finding the smallest element in the unsorted subarray, swapping it with the leftmost unsorted element (putting it in sorted order), and moving the subarray boundaries one element to the right.

Example- Consider the array:
12, 35, 87, 26, 9, 28, 7
Find the smallest element of the array and swap it with first array element, then find second smallest element and swap it with second array element, and so on.
n = length of array = 7
i = 0: minimum element in [0...6]: 7, swap it with 12
7, 35, 87, 26, 9, 28, 12
i = 1: minimum element in [1...6]: 9, swap it with 35
7, 9, 87, 26, 35, 28, 12
i = 2: minimum element in [2...6]: 12, swap it with 87
7, 9, 12, 26, 35, 28, 87
i = 3: minimum element in [3...6]: 26, already at its position
7, 9, 12, 26, 35, 28, 87
i = 4: minimum element in [4...6]: 28, replace with 35
7, 9, 12, 26, 28, 35, 87
i = 5: minimum element in [5...6]: 35, already at its position
7, 9, 12, 26, 28, 35, 87