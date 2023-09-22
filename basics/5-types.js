// TODO: arrays - collection of related items
// const fruits = ["apple", "cherry", "banana"]; //array
// const array1 = new Array(123, "hello", ["a", "b", "c"]); - avoid, slows down the program

// console.log(typeof fruits); //data type
// console.log(fruits[0]); //access first element using bracket notation
// console.log(fruits.pop()); //remove last element and returns it
// console.log(fruits.shift()); //remove first element and returns it
// console.log(fruits.push("orange")); //append to end of array
// console.log(fruits.unshift("mango")); //insert element at start of array
// fruits[1] = "pineapple"; //change elements of an array
// // adding elements to high indices means that in btwns will be undefined
// console.log(fruits.slice(0, 1)); //slice from 0 to 1, 1 exclusive and return sliced
// console.log(fruits);
// console.log(fruits.length);
// // console.log(fruits.split()); //!!! split() is used with strings

// TODO: array methods
// const letters = ["a", "b", "c"];
// console.log(letters.concat(fruits)); //concat()
// console.log(fruits.indexOf("cherry")); //indexOf()
// console.log(fruits.includes("cherry")); //includes()
// console.log(fruits.sort()); //sort()
// fruits.splice(0, 2); //start, number of items to delete
// FIXME: check on find(), findIndexOf()
// console.log(fruits);

// TODO: working of js arrays - since arrays are stored by reference
// const array1 = ["a", "b"];
// const array2 = array1; //copy
// array2.push("hello");
// console.log(array2);
// console.log(array1); //change also reflected in array1

// TODO: multidimensional arrays - array that contains another array
// const studentData = [
//   ["John", 20],
//   ["Doe", 21],
//   ["Jane", 22],
// ];
// console.log(studentData[1][0]); //Doe
// studentData[0][2] = "math"; //change inner array
// studentData[2].push("english"); //add element to inner array
// studentData.push(["peter", 23]); //add element to outer array
// studentData.splice(1, 1, ["susan", 24]); //remove, replace
// studentData.pop(); //remove element from outer array
// studentData[3].pop(); //remove element from inner array
// console.log(studentData);

// TODO: iterate over a multidimensional array using forEach()
// studentData.forEach((student) => {
//   student.forEach((data) => {
//     console.log(data);
//   });
// });

// TODO: iterate over a multidimensional array using for loop
// for (let i = 0; i < studentData.length; i++) {
//   for (let j = 0; j < studentData[i].length; j++) {
//     console.log(studentData[i][j]);
//   }
// }

// TODO: strings
// const firstname = "John"; //immutable
// console.log(firstname[0]); //access
// console.log(firstname.charAt(1)); //charAt()
// // js is case sensitive
// // + / - to span accross multiple lines
// console.log(firstname.length);
// const a = new String("hello");  //string object, avoid, slows down the program
// console.log(firstname.split(""))
// // check on string methods
// // \ to include special characters, \"Peter"
// console.log(firstname)

// TODO: iterating over array, object, string using for...in loop
// const fruits = ["apple", "banana", "cherry"];
// const student = {
//   name: "John",
//   age: 25,
//   gender: "male",
// };
// const name = "John";

// for (item in fruits) {
//   //array, best to use for...of
//   console.log(fruits[item]);
// }
// for (item in student) {
//   //object
//   console.log(`${item}:${student[item]} `);
// }
// for (item in name) {
//   //string
//   console.log(name[item]);
// }

// TODO: numbers
// const num1 = 123;
// const abc = "123";
// // int, float, e,
// console.log(4 - "hello"); //NaN
// console.log(3 / 0); //Infinity
// console.log(-3 / 0); //-Infinity
// const num2 = 123456789n; //BigInt
// console.log(0.1 + 0.2); //precision problems
// console.log((0.1 + 0.2).toFixed(2));
// const num3 = new Number(321); //number object, avoid, slows down the program
// // FIXME: check on number methods - isNaN(), valueOf(), isFinite(), parseInt()
// console.log(num1.valueOf());
// console.log(Number.MAX_VALUE); //FIXME: check on number properties
// console.log(typeof Number(abc));

// TODO: symbol
// const value1 = Symbol("hello"); //unique
// const value2 = Symbol("hello"); //unique
// console.log(value1);
// console.log(value1.description); //access description
// console.log(value1 === value2); //not equal

// TODO: adding Symbol as an object key
// const id = Symbol("id");
// const student = {
//   name: "John",
//   [id]: 123,
// };
// console.log(student);

// TODO: Symbols are not included in for..in loop
// for (item in student) {
//   console.log(item);
// }

// benefits of Symbols
// person[id] - unique values
// person.id - overwrites value
// FIXME: check on Symbol methods, properties
