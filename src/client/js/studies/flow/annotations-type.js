// @flow

(function() {
  function foo(x: string, y: number): number {
    return x.length * y;
  }

  foo('Hello', 42);
});
