// @flow

// The Object type#
// The Object type is a supertype of all object types. A value of this type supports property access by any property name, and will return a value with type any.

// Like any, this type should be used sparingly.

const anyObject: Object = {};
anyObject.foo.bar.baz; // OK
