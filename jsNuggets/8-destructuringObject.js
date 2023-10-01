const students = {
  name: "John",
  age: 25,
  gender: "male",
  scores: {
    maths: 95,
    english: 80,
  },
};

// destructuring
const {
  name: firstname, //alias
  age,
  gender,
  scores: { maths, english },
} = students;

console.log(firstname, age, gender, maths, english);

// doing object destructuring right away/in parameters
function printStudent({ name: firstname, age: years }) {
  console.log(firstname, years);
}

printStudent(students);

// TODO: object destructuring can be done at two points

// inside function body
// at parameters
