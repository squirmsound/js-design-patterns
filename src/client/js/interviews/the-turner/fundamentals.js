// QUESTION 1: 
// -------------------------------------------------------------------------------------------------
// // What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

// QUESTION 2:
// -------------------------------------------------------------------------------------------------
// // What will the code below output to the console and why?
    (function() {
      var a = (b = 3);
    })();

    console.log("a defined? " + (typeof a !== "undefined"));
    console.log("b defined? " + (typeof b !== "undefined"));

// QUESTION 3:
// -------------------------------------------------------------------------------------------------
// // What will the code below output to the console and why?
      var myObject = {
        foo: "bar",
        func: function() {
          var self = this;
          console.log("outer func:  this.foo = " + this.foo);
          console.log("outer func:  self.foo = " + self.foo);
          (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
          })();
        }
      };
      myObject.func();

    // The above code will output the following to the console:

    // outer func:  this.foo = bar
    // outer func:  self.foo = bar
    // inner func:  this.foo = undefined
    // inner func:  self.foo = bar

    // // NOTE - An acceptable answer to why:
    // In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.
    // In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.


// QUESTION 4:
// -------------------------------------------------------------------------------------------------
// Write a simple function (less than 80 characters) that returns a boolean
// indicating whether or not a string is a palindrome.
// Should return true if str is a palindrome; otherwise, it returns false.

      // // NOTE - An acceptable answer:
      function isPalindrome(str) {
        str = str.replace(/\W/g, "").toLowerCase();
        return str == str.split("").reverse().join("");
      }

      // For example:
      console.log(isPalindrome("level")); // logs 'true'
      console.log(isPalindrome("levels")); // logs 'false'
      console.log(isPalindrome("A car, a man, a maraca")); // logs 'true'

// QUESTION 5:
// -------------------------------------------------------------------------------------------------
// Write a sum method which will work properly when invoked using either syntax below.

      console.log(sum(2, 3)); // Outputs 5
      console.log(sum(2)(3)); // Outputs 5

      // // NOTE - An acceptable answer:

      // METHOD 1
      function sum(x) {
        if (arguments.length == 2) {
          return arguments[0] + arguments[1];
        } else {
          return function(y) {
            return x + y;
          };
        }
      }

      // // If METHOD 1 is use, follow up QUESTION: Why does this work?

      // // NOTE - An acceptable answer:

      // In JavaScript, functions provide access to an arguments object which provides access to the actual
      // arguments passed to a function.
      // This enables us to use the length property to determine at runtime the number of arguments passed to the function.
      // If two arguments are passed, we simply add them together and return.


      // METHOD 2

      function sum(x, y) {
        if (y !== undefined) {
          return x + y;
        } else {
          return function(y) {
            return x + y;
          };
        }
      }
