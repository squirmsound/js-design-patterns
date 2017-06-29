// Object literals are a more natural control of flow in JavaScript.
// Switch is a bit old and clunky and prone to difficult debugging errors.
// Objects are more extensible, maintainable, and we can test them a lot better.

// Create an Object Literal Lookup design that would replace this switch.
var type = 'coke';
var drink;

switch(type) {
case 'coke':
  drink = 'Coke';
  break;
case 'pepsi':
  drink = 'Pepsi';
  break;
default:
  drink = 'Unknown drink!';
}
console.log(drink); // 'Coke'


