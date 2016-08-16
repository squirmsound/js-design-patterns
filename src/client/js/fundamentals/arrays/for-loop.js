export function forLoop() {
  var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
  counter;

  for(counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
  }
}

export function forEach() {
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

	names.forEach(function(name) {
		console.log(name);
	});
}
