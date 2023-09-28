// Froala

const staff = [
  {
    name: "John",
    age: 25,
    position: "developer",
    salary: 500,
  },
  {
    name: "Peter",
    age: 27,
    position: "designer",
    salary: 400,
  },
  {
    name: "Juliana",
    age: 29,
    position: "hr",
    salary: 300,
  },
  {
    name: "Jane",
    age: 30,
    position: "ceo",
    salary: 600,
  },
];

// reduces array to a single value - number/array/object
const total = staff.reduce((accumulator, person) => {
  return (accumulator += person.salary);
}, 0);

console.log(`Total salaries: $ ${total}`);

// TODO: reduce
// pass accumulator, currentIteration in  callback
// always return accumulator !!!
// pass initialAccumulatorValue as second parameter to reduce
// can reduce an array to - number/array/object