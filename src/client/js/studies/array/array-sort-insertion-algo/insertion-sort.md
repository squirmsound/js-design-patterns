### Insertion sort is a simple sorting algorithm in which sorting is done by picking one array element at a time and inserting it into already sorted subarray.

#### Insertion sort is
1. An in-place comparison sort.
2. A stable sorting algorithm i.e. after sorting, the order of elements with same value is not changed.
3. An online sorting algorithm i.e. it can sort a list as and when it receives it.

Example- Consider the array:
```
12, 35, 87, 26, 9, 28, 7
```

We consider sub arrays from 0..j, where j = 0 to n-1.

```
j = 0:    12
```

The array with 1 element is already sorted.

```
j = 1:    12, 35
```

```
35 > 12
```

so the array is still sorted.

```
j = 2:    12, 35, 87
```

```
87 > 35
```

added to already sorted array, so no change needed.

j = 3:    12, 35, 87, 26
As 26 < 87, the sub array is not sorted now and we need to place 26 at is correct position.
So we shift the array elements one by one to the right from 87 till we find an element smaller than 26 (which is 12).
After this the sub array [0..3] looks like:
        12, 35, 35, 87
Now replace the element next to 12 (i.e. 35) with 26 and therefore we get sorted sub array:
        12, 26, 35, 87

j = 4:    12, 26, 35, 87, 9
Again, since 9 < 87, we shift elements from 87 by one position till a smaller number is found or we reach beginning of the array. Since 9 is smaller than all elements of the sub array [0..4], we move all elements by one position to right and place 9 at the start of the array. Hence we get following sorted sub array:
        9, 12, 26, 35, 87

j = 5:    9, 12, 26, 35, 87, 28
Again 28 < 87, we proceed like before and we shift the array elements one by one to the right from 87 till we find an element smaller than 28 (which is 26). Replace the element next to 26 with 28. Hence the sorted array is:
        9, 12, 26, 28, 35, 87

j = 6:    9, 12, 26, 28, 35, 87, 7
Finally, we have 7 < 87. Proceeding as above, we shift elements from 87 by one position till a smaller number is found or we reach beginning of the array.  Since 7 is smaller than all elements of the sub array [0..6], we move all elements by one position to right and place 7 at the start of the array. Hence we get the sorted array as:
        7, 9, 12, 26, 28, 35, 87

Reference: https://en.wikipedia.org/wiki/Insertion_sort