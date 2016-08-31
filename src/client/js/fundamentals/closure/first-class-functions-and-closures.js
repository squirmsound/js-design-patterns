// functions are treated just like all other variables

// You can pass them as arguments to functions, you can return them as values from other functions, or you can assign them to variables or data structures

function greet(name) {
  console.log("Hello " + name);
}

greet("John");
// "Hello John"

const sayGreeting = greet;

sayGreeting('Jane');
// "Hello Jane"

var sayHello = function(name) {
  console.log('Hello ' + name);
}

sayHello("Alex");
// "Hello Alex"

// What if we wanted to change the greeting?
// Sometimes we would like to say “Hi” instead of “Hello”.

// We could create a generic “createGreeting” function, which would in turn “compose” another function for you, and return the new composed function.

function createGreeting(greeting) {
  return function(name) {
    console.log(greeting + " " + name);
  }
}
var sayHi = createGreeting("Hi");
var sayHello = createGreeting("Hello");

sayHi("Jack");
// "Hi Jack"

sayHello("Jack");
// "Hello Jack"

// The createGreeting function takes a greeting as its argument. The function returns a newly created anonymous function. However the newly created anonymous function was created inside another function createGreeting. So it is also a nested function now. Now since our language supports anonymous functions it will also have to support nested functions. And when we return nested functions from our function we run into another problem. We will look at that in more detail.

// The anonymous function takes a name argument and prints to the console greeting + name. The variable name is an argument to the anonymous function, and behaves just like any other variable defined within the function. In other words name is “local” to the anonymous function. But this is not true of the variable greeting. It is defined in another function called createGreeting and hence is “non local” to the anonymous function. However the anonymous function can access the variable greeting due to something called lexical scoping.

// The “scope” of a variable is its “visibility” within a program. “Lexical scope” means that visibility is limited to all the text (code). So when we say “local variables are lexically scoped” within a function, it means that the function's local variables are visible to all the text (code) in the function, even if the code is within another nested function. This also means that when you run the nested function outside the lexically scoped environment, the nested functions non local variable will not be visible. And there lies the problem of returning nested functions from another function. And indeed thats what we are doing here.

var sayHi = createGreeting('Hi');
// In the line above we assign the returned anonymous function to variable sayHi. And call the function in the next line.

sayHi('Jack');

// We are calling sayHi outside of createGreeting. And the greeting variable is not available outside of createGreeting. The variables it may access in the scope where it was defined, may not be available in the scope where it was actually called. Thats why languages like C don't support nested functions. For this to work the language needs to support another functional programming feature called “closures”. JavaScript supports closures. As matter of fact it has to support closures. Any language that supports first class functions and nested functions has to support closures.
//
// A function's closure is a reference to all its non local variables. In the previous example greeting was the non local variable and name was the local variable. A closure is a table of references to all of a functions non local variables. This allows the function to continue to refer to the non local variable even when the function is out of the scope of the variables.