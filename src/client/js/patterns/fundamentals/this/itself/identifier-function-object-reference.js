// NOTE: another solution to our running example would have been to use the foo identifier
// as a function object reference in each place, and not use this at all, which works:

function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    foo.count++;
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
console.log( foo.count ); // 4

// NOTE: However, that approach similarly side-steps actual understanding
// of this and relies entirely on the lexical scoping of variable foo.