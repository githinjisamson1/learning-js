// FusionCharts

const people = [
  {
    name: "John",
    age: 25,
    position: "developer",
  },
  {
    name: "Peter",
    age: 27,
    position: "designer",
  },
  {
    name: "John",
    age: 29,
    position: "hr",
  },
];

// TODO: filter, returns array of matches
const above25 = people.filter((person) => {
  return person.age > 25;
});

const developers = people.filter((person) => {
  return person.position === "developer";   //false returns []
});

// TODO: find, returns first match/object
const adult = people.find((person) => {
  return person.age > 25; //false returns undefined
});

console.log(above25);
console.log(developers);
console.log(adult);

// TODO:
// filter returns an array of matches
// changes the size of original array
// array[0].position

// find returns a single first match/object, obj.position