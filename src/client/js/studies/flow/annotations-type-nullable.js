// @flow

(function() {
  function length(x) {
    if (x !== null) {
      return x.length;
    } else {
      return 0;
    }
  }

  const total = length('Hello') + length(null);
});
