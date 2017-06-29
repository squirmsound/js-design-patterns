// Instead of relying on this, you could have explicitly passed in a context
// object to both identify() and speak()

function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello, I'm " + identify( context );
    console.log( greeting );
}

var march = {
    name: "March"
};

var squirm = {
    name: "Squirm"
};

identify( squirm ); // Squirm
speak( march ); // Hello, I'm March

// However, the this mechanism provides a more elegant way of implicitly "passing
// along" an object reference, leading to cleaner API design and easier re-use.