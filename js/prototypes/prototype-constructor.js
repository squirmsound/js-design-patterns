// A constructor is a function used for initializing new objects, and
// you use the new keyword to call the constructor.

function Account () {
}
​// This is the use of the Account constructor to create the userAccount object.​
​var userAccount = new Account ();

// all objects that inherit from another object also inherit a constructor property.
// And this constructor property is simply a property (like any variable)
// that holds or points to the constructor of the object.

//The constructor in this example is Object () ​
​var myObj = new Object ();

​// And if you later want to find the myObj constructor:​
console.log(myObj.constructor); // Object()​
​
​// Another example: Account () is the constructor​
​var userAccount = new Account ();

​// Find the userAccount object's constructor​
console.log(userAccount.constructor); // Account()