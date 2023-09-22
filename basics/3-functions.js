// TODO: functions - a routine that takes in 1 or more arguments and returns a single value
// value on function declaration - parameter
// value on function call - argument

// function to add two numbers
// let num1 = parseInt(prompt("enter first number"));
// let num2 = parseInt(prompt("enter second number"));
// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// console.log(`sum of ${num1} and ${num2} is: ${addTwoNumbers(num1, num2)}`);

// function to convert celcius to fahrenheit
// let celciusTemp = parseFloat(prompt("enter celcius temperature"));
// function fahrenheitEquivalent(celciustemp) {
//   return 1.8 * celciusTemp + 32;
// }
// console.log(`${celciusTemp} C = ${fahrenheitEquivalent(celciusTemp)} F`);

// arrow function to calculate area of circle
// const PI = 3.142;
// let radius = parseFloat(prompt("enter radius"));
// const calculateAreaOfCircle = (radius) => {
//   return PI * radius ** 2;
// };
// console.log(
//   `area of circle of radius ${radius} is: ${calculateAreaOfCircle(radius)}`
// );

// TODO: variable scope
// let a = "hello1"; //global variable, anywhere, avoid, if used without declaration
// function greet() {
//   let b = "hello2"; //local variable, in function
//   if (b === "hello2") {
//     let c = "hello3"; //block scoped variable, in immediate block
//     console.log(`${a} ${b} ${c}`);
//   }
// }
// greet()

// TODO: hoisting - using a function or variable before declaring it, avoid, bad practice

// function hoisting
// greet();
// function greet() {
//   console.log(`hello world`);
// }

// variable hoisting, !!! const and let do not support hoisting !!!
// console.log(a);
// var a = 5;

// TODO: recursion - function calling itself indefinitely until a base condition is met
// recursive function to count from 5 to 1
// const countDownNumber = (number) => {   //recursive function
//   console.log(number);
//   const newNumber = number - 1;
//   if (newNumber > 0) {  //base condition
//     countDownNumber(newNumber);
//   }
// };

// countDownNumber(5);

// recursive function to find factorial of a number
// let num = 5;
// const findFactorial = (num) => {
//   if (num === 0) {
//     return 1;
//   }
//   return num * findFactorial(num - 1);
// };
// console.log(`${num}!: ${findFactorial(num)}`);
