// NOTE: Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.


A closure is created when an inner function is made accessible from outside of the function that created it. This typically occurs when an outer function returns an inner function.  When this happens, the inner function maintains a reference to the environment in which it was created.  This means that it remembers all of the variables (and their values) that were in scope at the time. The following example shows how a closure is created and used.

function add(value1) {
  return function doAdd(value2) {
    return value1 + value2;
  };
}

var increment = add(1);
var foo = increment(2);
// foo equals 3
There are a number of things to note about this example.

The add() function returns its inner function doAdd(). By returning a reference to an inner function, a closure is created.
“value1” is a local variable of add(), and a non-local variable of doAdd(). Non-local variables refer to variables that are neither in the local nor the global scope.  “value2” is a local variable of doAdd().
When add(1) is called, a closure is created and stored in “increment”. In the closure’s referencing environment, “value1” is bound to the value one.  Variables that are bound are also said to be closed over. This is where the name closure comes from.
When increment(2) is called, the closure is entered. This means that doAdd() is called, with the “value1” variable holding the value one. The closure can essentially be thought of as creating the following function.

But, it is possible to emulate private data using closures. Recall that a closure contains a reference to the environment in which it was originally created―which is now out of scope. Since the variables in the referencing environment are only accessible from the closure function, they are essentially private data.