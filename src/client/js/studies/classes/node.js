const Person = function(firstName){
  this.firstName = firstName;
}

Person.prototype.walking = function(){
  console.log("i am walking");
}

const person = new Person();

person.walking();