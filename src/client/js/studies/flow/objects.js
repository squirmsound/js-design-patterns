// @flow

// Objects
// This type describes any object values that match a specified shape.

let object: {foo: string, bar: number} = {foo: "foo", bar: 0};
(object.foo: string);

// Property writes must be compatible with the declared type.
// object.bar = "bar";
object.bar = 2;
