// original array
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
    name: "Juliana",
    age: 29,
    position: "hr",
  },
];

const agesPeople = people.map((person) => {
  // console.log(person)
  return person.age;
});

const agesPeopleDoubled = people.map((person) => {
  return person.age * 2;
});

const newPeople = people.map((person) => {
  const { name, age, position } = person;
  return { name: name.toUpperCase(), oldAge: age + 20, position };
});

// iterate then render to browser
const result = document.querySelector("#result");
const namesOfPeople = people.map((person) => {
  return `<h1>${person.name}</h1>`;
});

// separate items using space
result.innerHTML = namesOfPeople.join("");

console.log(agesPeople);
console.log(agesPeopleDoubled);
console.log(newPeople);

// TODO: map
// returns new array
// does not change size of the original array
// uses values from the original array when making new ones
