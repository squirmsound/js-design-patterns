// @flow

// Classes#
// Defining a class also defines a type, which can be used to annotate instances of that class.

class MyClass {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
  bar(): string {
    return this.foo;
  }
}

const myInstance: MyClass = new MyClass("foo");
(myInstance.foo: string);
(myInstance.bar(): string);