var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname; // John Doe

// force the context of the function using either call() or the apply() function.
console.log(test.call(obj.prop)); // Aurelio De Rosa

// the this keyword, in JavaScript depends on how a function is invoked, not how it’s defined.

// difference between apply() & call() - both methods expect a thisArg as the first argument. This is the argument that gives the function a context; it determines the value of the JavaScript keyword this inside the function that is called or applied.

// The single difference is that the call method requires that arguments are specified separately; the apply method takes them as an array.

// an argument that gives the function a context
// an argument determins the value of the javascript keyword 'this' inside the function that is called or applied.