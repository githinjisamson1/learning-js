// default import
const addTwoNumbers = require("./moduleDemo");

// named import
const { greet } = require("./moduleDemo");

// import displayName from "./moduleDemo";

// syntax - consol.log("hello")
// run time/exceptions - calling an invalid function or variable

// TODO: try...catch...finally
// try {
//   console.log(a);
// } catch (error) {
//   //   console.log(`Error caught:`, error);
//   console.log(`error caught:`, error.message);
// } finally {
//   console.log("finally will execute always");
// }

// TODO: try...catch in setTimeout, should be inside timed function
// setTimeout(() => {
//   try {
//     console.log("hello");
//   } catch (error) {
//     console.log("error caught", error.message);
//   }
// }, 3000);

// TODO: throw new - creating user defined exceptions
// e.g., throw new Error("Attempt to divide number by zero")

// try {
//   const numerator = 3;
//   const denominator = 0;
//   numerator / denominator;

//   // considering Infinity to be an error
//   throw new Error("Attempt to divide number by 0");
// } catch (error) {
//   console.log("error caught", error);
// }

//  TODO: using code in moduleDemo.js
console.log(addTwoNumbers(1, 2));
greet();
// displayName("John")