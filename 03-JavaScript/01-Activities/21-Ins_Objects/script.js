// Objects are a collection of properties
let myObject =
{
  id : "123A";
  name :"E.T";
  age : 2000,
  favours: ["blue","Pizza"],
  son: {
    id: 12;
    name: "E.T.'s son"
  }
}
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);
