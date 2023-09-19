// keep code - clean, resuable, modular !!!
// modules always use strict mode

function addTwoNumbers(a, b) {
  return a + b;
}

function greet() {
  console.log("hello");
}

// export default function displayName(name) {
//   console.log(`hello ${name}`);
// }

// default export
module.exports = addTwoNumbers;

// named export
module.exports.greet = greet;
