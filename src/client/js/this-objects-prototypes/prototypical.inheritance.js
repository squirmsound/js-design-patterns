function Foo(name){
  this.name = name;
}

Foo.prototype.getName = function(){
  return this.name;
};

function Bar(name, label){
  Foo.call(this, name);
  this.label = label;
}

//here we make a new `Bar.prototype` linked to `Foo.prototype`
Bar.prototype = Object.create(Foo.prototype);

// Beware! Now `Bar.prototype.constructor` is gone, and might need to be manually "fixed" if you're in habit of relying on such properties!
Bar.prototype.getLabel = function (){
  return this.label;
};

var a = new Bar("a", "obj a");

console.log(a.getName()); // "a"
console.log(a.getLabel()); // "obj a"
