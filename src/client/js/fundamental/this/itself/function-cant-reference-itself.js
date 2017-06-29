// illustrate how 'this' doesn't let a function get a reference to itself like we
// might assume.

// attempt to track how many times a function (foo) is called:
function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 0 -- Why?

// NOTE: foo.count is still 0, even though the four console.log
// statements clearly indicate foo(..) was in fact called four times.
// The frustration stems from a too literal interpretation of what
// this (in this.count++) means.

// NOTE: When the code executes foo.count = 0, indeed it's adding a property count to the
// function object foo. But for the this.count reference inside of the function, this is
// not in fact pointing at all to that function object, and so even though the property
// names are the same, the root objects are different, and confusion continues.



