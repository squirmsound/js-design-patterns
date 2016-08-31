// @flow
export default function getFibonacciSeq() {
  const fibonacci = [0, 1, 1];

  for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  for (let i = 1; i < fibonacci.length; i++) {
    console.log('FIBONNACI[I]', fibonacci[i]);
  }
};

// FIBONNACI[I] 1
// index.js?7ec6:10 FIBONNACI[I] 2
// index.js?7ec6:10 FIBONNACI[I] 3
// index.js?7ec6:10 FIBONNACI[I] 5
// index.js?7ec6:10 FIBONNACI[I] 8
// index.js?7ec6:10 FIBONNACI[I] 13
// index.js?7ec6:10 FIBONNACI[I] 21
// index.js?7ec6:10 FIBONNACI[I] 34
// index.js?7ec6:10 FIBONNACI[I] 55
// index.js?7ec6:10 FIBONNACI[I] 89
// index.js?7ec6:10 FIBONNACI[I] 144
// index.js?7ec6:10 FIBONNACI[I] 233
// index.js?7ec6:10 FIBONNACI[I] 377
// index.js?7ec6:10 FIBONNACI[I] 610
// index.js?7ec6:10 FIBONNACI[I] 987
// index.js?7ec6:10 FIBONNACI[I] 1597
// index.js?7ec6:10 FIBONNACI[I] 2584
// index.js?7ec6:10 FIBONNACI[I] 4181
