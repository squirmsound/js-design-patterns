Bubble sort is an in-place comparison sort.
Bubble sort algorithm compares each pair of adjacent elements and swaps them if they are in the wrong order.
The pass through the array is repeated until no swaps are needed, which indicates that the array is sorted.

Example- Consider the array:
12, 35, 87, 26, 9, 28, 7

First iteration:
[12, 35], 87, 26, 9, 28, 7     12 < 35, no swapping required
12, [35, 87], 26, 9, 28, 7     35 < 87, no swapping required
12, 35, [87, 26], 9, 28, 7     87 > 26, swap
12, 35, 26, [87, 9], 28, 7     87 > 9, swap
12, 35, 26, 9, [87, 28], 7     87 > 28, swap
12, 35, 26, 9, 28, [87, 7]     87 > 7, swap
12, 35, 26, 9, 28, 7, 87
As we can see here, the largest element is shifted to the end of the array. So, in next iteration, we need swapping till 2nd last element.

Second Iteration:
[12, 35], 26, 9, 28, 7, 87    12 < 35 no swapping required
12, [35, 26], 9, 28, 7, 87    35 > 26, swap
12, 26, [35, 9], 28, 7, 87    35 > 9, swap
12, 26, 9, [35, 28], 7, 87    35 > 28, swap
12, 26, 9, 28, [35, 7], 87    35 > 7, swap
12, 26, 9, 28, 7, 35, 87

Proceeding this way, we get sorted array after n iterations
7, 9, 12, 26, 28, 35, 87

Optimization- Consider the array:
3, 25, 46, 58, 70, 76
The array is already sorted. So, there will be no swapping, since all elements are in order.
After any iteration, if there is no swapping required, then it means the array is already sorted.
So, we can terminate the execution right there.

Reference: https://en.wikipedia.org/wiki/Bubble_sort