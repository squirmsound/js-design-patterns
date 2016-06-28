// the this mechanism provides a more elegant way of implicitly 'passing along'
// an object reference, leading to a cleaner API design and easier to reuse.

function identify(){
  return this.name.toUpperCase();
}

function speak(){
  var greeting = "Hi, I'm " + identify.call(this);
  console.log(greeting);
}

// context object
var march = {
  name: 'March'
};
// context object
var squirm = {
  name: 'Squirm'
};

identify.call(march); // March
identify.call(squirm); // Squirm

speak.call(march); // Hi, I'm March
speak.call(squirm); // Hi, I'm Squirm


// this code snippet allows identify() and speak() functions to be reused
// against multiple context objects(march and squirm), rather than needing
// a seperate version of the function for each object.


// the more complex your usage pattern is, the more clearly you'll see that
// passing context around as an explicit parameter is often messier than passing // around a 'this' context


