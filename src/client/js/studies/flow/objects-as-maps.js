// @flow
// Objects as maps
// Objects are often used as lookup tables, or maps. While the Map type is more suitable for this use case, Flow does support this common idiom.

let coolRating: {[id:string]: number} = {};
coolRating["sam"] = 10; // Yes, it's a 0-10 scale.
