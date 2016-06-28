// NOTE: Think of the prototype attribute as a characteristic of the object;
// this characteristic tells us the object’s “parent”.

// An object’s prototype attribute points to the object’s “parent”—the
// object it inherited its properties from.

// The prototype attribute is normally referred to as the prototype object,
// and it is set automatically when you create a new object

// Every object inherits properties from some other object, and it is
// this other object that is the object’s prototype attribute or “parent.”

// All objects have attributes just like object properties have attributes.
// And the object attributes are prototype, class, and extensible attributes.
// It is this prototype attribute that we are discussing in this second example.

// Also note that the __proto__ “pseudo” property contains an object’s prototype
// object (the parent object it inherited its methods and properties from).

// NOTE: Prototype Attribute of Objects Created with new Object () or Object Literal

// All objects created with object literals and with the Object constructor
// inherits from Object.prototype.

// Therefore, Object.prototype is the prototype attribute (or the prototype object)
// of all objects created with new Object () or with {}.
// Object.prototype itself does not inherit any methods or properties from any other object.

// The userAccount object inherits from Object and as such its
// prototype attribute is Object.prototype.​

​var userAccount = new Object ();
​
​// This demonstrates the use of an object literal to create the userAccount object;
// the userAccount object inherits from Object; therefore, its prototype attribute
// is Object.prototype just as the userAccount object does above.​

​var userAccount = {
  name: 'Mike'
};

// NOTE: Prototype Attribute of Objects Created With a Constructor Function

