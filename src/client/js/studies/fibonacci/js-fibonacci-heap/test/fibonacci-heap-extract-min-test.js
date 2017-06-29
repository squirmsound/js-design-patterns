import test from 'ava';
import Heap from '../';

test('should consolidate 8 nodes into a well formed order 1 tree', function (t) {
  var heap = new Heap();
  var node0 = heap.insert(0, null);
  var node1 = heap.insert(1, null);
  var node2 = heap.insert(2, null);

  // Extracting minimum should trigger consolidate.
  //
  //               1
  //  0--1--2  ->  |
  //               2
  //
  t.is(heap.extractMinimum(), node0);
  t.is(heap.size(), 2);
  t.true(node1.parent === undefined);
  t.true(node2.parent === node1);
  t.true(node1.next === node1);
  t.true(node2.next === node2);
  t.true(node1.child === node2);
  t.true(node2.child === undefined);
});

test('should consolidate 8 nodes into a well formed order 2 tree', function (t) {
  var heap = new Heap();
  var node0 = heap.insert(0, null);
  var node1 = heap.insert(1, null);
  var node2 = heap.insert(2, null);
  var node3 = heap.insert(3, null);
  var node4 = heap.insert(4, null);

  // Extracting minimum should trigger consolidate.
  //
  //                       1
  //                      /|
  //  0--1--2--3--4  ->  3 2
  //                     |
  //                     4
  //
  t.is(heap.extractMinimum(), node0);
  t.is(heap.size(), 4);
  t.true(node1.parent === undefined);
  t.true(node2.parent === node1);
  t.true(node3.parent === node1);
  t.true(node4.parent === node3);
  t.true(node1.next === node1);
  t.true(node2.next === node3);
  t.true(node3.next === node2);
  t.true(node4.next === node4);
  t.true(node1.child === node2);
  t.true(node2.child === undefined);
  t.true(node3.child === node4);
  t.true(node4.child === undefined);
});

test('should consolidate 8 nodes into a well formed order 3 tree', function (t) {
  var heap = new Heap();
  var node0 = heap.insert(0, null);
  var node1 = heap.insert(1, null);
  var node2 = heap.insert(2, null);
  var node3 = heap.insert(3, null);
  var node4 = heap.insert(4, null);
  var node5 = heap.insert(5, null);
  var node6 = heap.insert(6, null);
  var node7 = heap.insert(7, null);
  var node8 = heap.insert(8, null);

  // Extracting minimum should trigger consolidate.
  //
  //                                 __1
  //                                / /|
  //                               5 3 2
  //  1--2--3--4--5--6--7--8  ->  /| |
  //                             7 6 4
  //                             |
  //                             8
  //
  t.is(heap.extractMinimum(), node0);
  t.true(node1.parent === undefined);
  t.true(node2.parent === node1);
  t.true(node3.parent === node1);
  t.true(node4.parent === node3);
  t.true(node5.parent === node1);
  t.true(node6.parent === node5);
  t.true(node7.parent === node5);
  t.true(node8.parent === node7);
  t.true(node1.next === node1);
  t.true(node2.next === node5);
  t.true(node3.next === node2);
  t.true(node4.next === node4);
  t.true(node5.next === node3);
  t.true(node6.next === node7);
  t.true(node7.next === node6);
  t.true(node8.next === node8);
  t.true(node1.child === node2);
  t.true(node2.child === undefined);
  t.true(node3.child === node4);
  t.true(node4.child === undefined);
  t.true(node5.child === node6);
  t.true(node6.child === undefined);
  t.true(node7.child === node8);
  t.true(node8.child === undefined);
});
