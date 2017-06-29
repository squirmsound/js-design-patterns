# Hoisting
Hoisting is an easy to understand, but often overlooked nuance of the JavaScript language.

Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations to the top of the current scope.
However, only the actual declarations are hoisted.

//  functions that are assigned to variables are not hoisted.

// Within its current scope, regardless of where a variable is declared, it will be, behind the scenes, hoisted to the top. However, only the declaration will be hoisted. If the variable is also initialized, the current value, at the top of the scope, will initially be set to undefined.

// As a result, the variable had already been declared at the time of the alert; however, because initializations aren’t hoisted as well, the value of the variable is: undefined.

// initializations are not hoisted
// declarations are hoisted

```
function test() {

   console.log(a);
   console.log(foo());

   // these are hoisted. moved up to tope of current scope.
   var a = 1;

   function foo() {
      return 2;
   }
}

test();

// undefined
// 2
```


execution context
non scalur values
delegate

@mde
