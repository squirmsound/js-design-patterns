// how to avoid the issue altogether, and hack toward some other solution,
// such as creating another object to hold the count property:

// attempt to track how many times a function (foo) is called:
function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    data.count++;
}
var data = {
  count: 0,
};

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
console.log( data.count ); // 4

// NOTE: While it is true that this approach "solves" the problem, unfortunately it
// simply ignores the real problem -- lack of understanding what this means and how it works
// and instead falls back
// to the comfort zone of a more familiar mechanism: lexical scope.

// NOTE: Lexical scope is a perfectly fine and useful mechanism; I am not belittling the use of it,
// by any means (see "Scope & Closures" title of this book series). But constantly guessing at how
// to use this, and usually being wrong, is not a good reason to retreat back to lexical scope and
// never learn why this eludes you.

// NOTE: To reference a function object from inside itself, this by itself will typically
// be insufficient. You generally need a reference to the function object via a lexical
// identifier (variable) that points at it.



var a = [1,2,3,4,5,5,6,7];