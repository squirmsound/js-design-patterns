// @flow

// The Function type
// The Function type is a supertype of all function types. A value of this type may be called with any number of any type of parameters, and will return a value with type any.

// Like any, this type should be used sparingly.

// const anyFunction: Function = () => {};
// anyFunction("foo", "bar").baz.quux; // OK

const anyFunction: Function = () => {};
anyFunction("foo", "bar").baz.quux; // OK