// NOTE: Javascripts inheritance system that allows for extending on the various data types

// NOTE: i know that in js objects have an internal property called the [[Prototype]], which is fundamentally a reference to another object.

// NOTE: so with that, each object is a prototype of another obj and inherits the properties defined in the prototype

// NOTE: The prototype property is used primarily for inheritance;
// you add methods and properties on a function’s prototype
// property to make those methods and properties available to
// instances of that function.

// NOTE: This prototype property is not enumerable; that is, it isn’t
// accessible in a for/in loop. But Firefox and most versions of
// Safari and Chrome have a __proto__ “pseudo” property
// (an alternative syntax) that allows you to access an object’s prototype property.


// Objects in Javascript have an internal property, denoted in the specification as [[Prototype]], which is simply a reference to another object.

// Each object is a prototype of another object, and inherits the properties defined in the prototype

// Almost all objects are given a non-null value for this property, at the time of their creation.



// What is the [[Prototype]] reference used for?

var myObject = {
    a: 2
};

myObject.a; // 2


// The [[Get]] operation that is invoked when you reference
// a property on an object, such as `myObject.a`

// For that default [[Get]] operation, the first step is
// to check if the object itself has a property a on it, and if so, it's used.


// every JavaScript function has a prototype property
// (this propertyis empty by default),

// You attach properties and methods on this prototype property
// when you want to implement inheritance.


// This prototype property is not enumerable; that is, it isn’t
// accessible in a for/in loop. But Firefox and most versions of
// Safari and Chrome have a __proto__ “pseudo” property
// (an alternative syntax) that allows you to access an object’s prototype property.

// The prototype property is used primarily for inheritance;
// you add methods and properties on a function’s prototype
// property to make those methods and properties available to
// instances of that function.

function PrintStuff (myDocuments) {
​ this.documents = myDocuments;
}
​
​// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:​
PrintStuff.prototype.print = function () {
  console.log(this.documents);
}
​
​// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.​
​var newObj = new PrintStuff ("I am a new Object and I can print.");
​
​// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.​
newObj.print (); //I am a new Object and I can print.