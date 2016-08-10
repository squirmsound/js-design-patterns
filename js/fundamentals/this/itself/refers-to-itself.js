function bar() {
    bar.count = 4; // `foo` refers to itself
}

setTimeout( function(){
    // anonymous function (no name), cannot
    // refer to itself
}, 10 );

// NOTE: In the first function, called a "named function", foo is a reference that
// can be used to refer to the function from inside itself.

// NOTE: But in the second example, the function callback passed to setTimeout(..) has
// no name identifier (so called an "anonymous function"), so there's
// no proper way to refer to the function object itself.