// @flow

// Callable objects
// Functions are also objects, and may have other props. Flow models this as an object type with a callable property.

function makeCallable(): { (x: number): string; foo: number } {
  function callable(number) {
    return number.toFixed(2);
  }
  callable.foo = 123;
  return callable;
}

const callable = makeCallable();

const callableReturn: string = callable(Math.random());
const callableFoo: number = callable.foo; // 123
