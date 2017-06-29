// @flow

(function() {
  function foo(x) {
    if (typeof x === 'string') {
      return x.length;
    } else {
      return 0;
    }
  }

  const res = foo('Hello') + foo(42);
});
