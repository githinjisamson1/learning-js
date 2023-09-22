// ECMAScript6/ECMAScript2015
// let, const
// arrow function
// classes
// default parameter values
// template literals
// destructuring assignment
// import, export
// promises
// rest parameter, spread operator

// TODO: arrow function with no argument
// const greet = () => {
//   console.log("hello world");
// };
// greet();

// TODO: arrow function with two arguments
// const addTwoNumbers = (a, b) => {
//   return a + b;
// };
// console.log(addTwoNumbers(1, 2));

// TODO: arrow function as an expresion
// const age = 20;
// let welcome = age < 18 ? () => console.log("baby") : () => console.log("adult");
// welcome();

// multiline arrow functions - use curly braces

// TODO: this with a normal function
// function Person() {
//   //constructor
//   (this.name = "John"),
//     (this.sayName = function () {
//       console.log(this.name); //this is accessible, method of an object
//       function innerFunction() {
//         console.log(this.name); //this is not accessible, window object
//         console.log(this);
//       }
//       innerFunction()
//     });
// }
// const person1 = new Person();
// person1.sayName();

// TODO: this with an arrow function
// function Person() {
//constructor
//   (this.name = "John"),
//     (this.sayName = function () {
//       console.log(this.name); //this is accessible, method of an object
//       let innerFunction = () => {
//         console.log(this.name); //this is accessible, parent's scope
//         console.log(this);
//       };
//       innerFunction()
//     });
// }
// const person1 = new Person();
// person1.sayName();

// TODO: arguments binding in normal functions
// let a = function () {
//   console.log(arguments);
// };
// a(1, 2, 3, 4, 5);

// TODO: arguments binding in arrow functions,
// not supported in arrow functions, use spread syntax to solve
// let b = (...args) => {
//   console.log(args);
// };
// b(5, 4, 3, 2, 1);

// TODO: arrow functions with promises and callbacks
// asyncFunction.then(() => {...code})

// TODO: avoid the following with arrow functions
// do not use arrrow functions to create object methods
// do not use arrow functions as a constructor

// TODO: default parameters
// const findProduct = (a, b = 4) => {
//   return a * b;
// };
// console.log(findProduct(3)); //12
// console.log(findProduct(3, 5)); //15

// TODO: can use expression as default parameter
// function sum(x = 1, y = x, z = x + y) {
//   console.log(x + y + z);
// }

// sum(); // 4

// TODO: can pass function value as default value
// const sum = () => 15;
// const calculate = function (x, y = x * sum()) {
//   return x + y;
// };

// const result = calculate(10);
// console.log(result); // 160

// TODO: passing undefined value
// function test(x = 1) {
//   console.log(x);
// }
// test(undefined); // 1

// TODO: template literals - string interpolation
// const name = "John";
// console.log(`hello ${name}`);

// TODO: spread operator with arrays, used to copy arrays/clone
// const array1 = [1, 2, 3];
// const array2 = ["a", "b", "c", ...array1]; //copy array, clone
// console.log(array2);

// array2 = array1
// any change made in array2 is reflected in both array2 and array1
// because objects are assigned by reference and not value
// i.e. point to location in memory and not value itself
// this scenario can be prevented using a spread operator

// TODO: spread operator with objects
// const obj1 = { x: 1, y: 2, z: 3 };
// const obj2 = { name: "John", age: 20, ...obj1 }; //copy object
// console.log(obj2);

// TODO: spread operator used as rest parameter
// let a = (...args) => {
//   console.log(args);
// };
// a(5, 4, 2, 1);

// TODO: Map
// similar to objects, key/value pair
// data structure that can contain objects, functions and other dts as key

// const map1 = new Map(); //create a new map
// console.log(typeof map1); //data type
// map1.set("info", { name: "John", age: 25 }); //add elements to map
// const data = {};
// map1.set(data, { subject: "math", mean: 8.5 }); //use object as key
// console.log(map1.get("info")); //access map elements
// console.log(map1.has("info")); //check map elements
// map1.delete("info") //removes an element from map and returns true
// map1.clear("info")  //removes all elements from map
// console.log(map1.size);  //get number of elements in map
// console.log(map1);

// TODO: looping through maps

// iterate map2 - for...of, forEach()
// const map2 = new Map();
// map2.set("name", "John");
// map2.set("age", 25);

// for...of loop
// for (let [key, value] of map2) {
//   console.log(`${key} - ${value}`);
// }

// forEach() loop
// map2.forEach((value, key) => {
//   console.log(`${key} - ${value}`);
// });

// iterate over keys
// for (key of map2.keys()) {
//   console.log(key);
// }

// iterate over values
// for (value of map2.values()) {
//   console.log(value);
// }

// iterate over key/value pairs
// for (let [key, value] of map2.entries()) {
//   console.log(`${key} - ${value}`);
// }

// FIXME: check differences between map vs object

// TODO: WeakMap
// similar to Map
// strictly uses objects as keys
// not iterable

// const weakMap1 = new WeakMap(); //create new WeakMap
// const obj = {};
// const obj2 = {};
// weakMap1.set(obj, "hello"); //use obj as key
// weakMap1.set(obj2);
// // weakMap1.set("name", "john");    //keys can only be objects
// console.log(weakMap1.get(obj)); //access elements
// weakMap1.delete(obj2); //remove one element
// console.log(weakMap1.has(obj2)); //check for element
// console.log(weakMap1);
// // WeakMaps are not iterable

// TODO: Set
// similar to array, can store objects, string, numbers etc. any dts
// but cannot contain duplicate values

// const set1 = new Set([1, 2, 1, "hello", { name: "John" }]); //create new set
// console.log(set1.values()); //access elements
// console.log(set1.has("hello")); //check element
// set1.add(3); //add element
// set1.delete(3); //remove an element
// set1.clear(); //remove all elements
// console.log(set1);

// iterate set using forEach
// set1.forEach((item) => {
//   console.log(item);
// });

// iterate set using for...of
// for (item of set1) {
//   console.log(item);
// }

// TODO: WeakSet
// similar to Sets, but only contains objects
// const obj1 = { name: "John" };
// const obj2 = { maths: 90 };
// const weakSet1 = new WeakSet();
// weakSet1.add(obj1);
// weakSet1.add(obj2);
// weakSet1.add("hello")    //WeakSet only contains objects
// weakSet1.delete(obj2);
// console.log(weakSet1.has(obj2));
// WeakSets are not iterable
// console.log(weakSet1);

// FIXME: Mathematical Set Operations - use functions
// union - contain elements of both sets
// intersection - elements of set a that are also in set b
// difference - elements of set a that are not in set b
// subset - true if all elements of set b is in set a

// TODO: destructuring objects
// const student = {
//   name: "John",
//   age: 25,
//   gender: "male",
// };

// let { name: firstname, age, gender } = student;
// console.log(firstname, age, gender);

// TODO: destructuring arrays
// const fruits = ["apple", "banana", "cherry"];
// const [a, b, c, x = 1, y = 2] = fruits;
// console.log(a, b, c, x, y);

// TODO: swapping variables
// let x = 1;
// let y = 2;
// [x, y] = [y, x];
// console.log(x, y);

// TODO: skip items
// const array1 = [1, 2, 3];
// const [a, , c] = array1;
// console.log(a, c)

// TODO: assigning rem elements to a single variable
// use rest as last variable
// const array2 = [1, 2, 3, 4, 5];
// const [a, b, ...c] = array2;
// console.log(a, b, c);

// TODO: nested destructuring
// const [x, [y, z]] = arrValue
// const {name, hobbies:{read, playGame}} = person

// TODO: classes - blueprint/template of an object
// class Person {
//   //define class
//   constructor(name, age) {
//     //define constructor, called automatically
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     //class method
//     console.log(`hello ${this.name}: ${this.age}`);
//   }
//   get getName() {
//     //getter
//     return this.name;
//   }
//   set setName(newName) {
//     //setter
//     this.name = newName;
//   }
// }
// const person1 = new Person("John", 25); //object instantiation, constructor called automatically
// console.log(person1.name, person1.age); //access properties, dot notation
// person1.greet(); //access method
// person1.setName = "Doe"; //no brackets
// console.log(person1.getName); //no brackets
// console.log(typeof Person); //special type of function
// // hoisting is not suported in classes
// // all code inside a class is automatically in strict mode

// inheritance - code reusability / DRY

// class Animal {
//   //super class
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`hello ${this.name}`);
//   }
// }

// class Dog extends Animal {
//   //child class
//   constructor(name, color) {
//     //own constructor
//     super(name);
//     this.color = color; //additional prop
//   }

//   greet() {
//     //override greet() in super
//     console.log(`hi ${this.name}: ${this.color}`);
//   }
// }

// const dog1 = new Dog("Bosco", "brown");
// dog1.greet();
// console.log(dog1 instanceof Dog);

// TODO: for...of loop

// iterate array
// const fruits = ["apple", "banana", "cherry"];
// for (item of fruits) {
//   console.log(item);
// }

// iterate map
// const map1 = new Map();
// map1.set("name", "John");
// map1.set("age", 25);

// for (let [key, value] of map1) {
//   console.log(key, value);
// }

// iterate set
// const set1 = new Set([1, 2, 3, 4, 5])

// for(item of set1){
//     console.log(item)
// }

// iterate string
// const string1 = "John";

// for (item of string1) {
//   console.log(item);
// }

// for...of | for...in
// iterates values of an iterable | iterates keys of an object
// cannot be used to iterate an object | avoid using for...in for iterables
// maintains order | does not maintain order

// TODO: proxies - used to add custom behavior to functions or objects

// target object
// const student = {
//   name: "John",
//   age: 25,
// };

// handler
// const handler = {
//   get: function (obj, prop) {
//     return obj[prop] ? obj[prop] : "property does not exist";
//   },
// };

// proxy instantiation
// const proxy1 = new Proxy(student, handler);
// console.log(proxy1);
// console.log(proxy1.name);
// console.log(proxy1.age);
// console.log(proxy1.class);  //property does not exist

// TODO: passing empty handler, acts as normal object
// const proxy2 = new Proxy(student, {});
// console.log(proxy2);

// TODO: get(), set()
// const student = {
//   //target object
//   name: "John",
//   age: 25,
// };

// const handler = {
//   //proxy handler
//   get(obj, prop) {
//     //access value
//     return obj[prop];
//   },
//   set(obj, prop, value) {
//     //change/add value
//     obj[prop] = value;
//   },
// };

// const proxy3 = new Proxy(student, handler); //instantiation
// proxy3.name = "Doe"; //change value
// proxy3.gender = "male"; //add key/value
// console.log(proxy3);

// TODO: uses of proxy
// for validation
// const student = {
//   name: "John",
//   age: 25,
// };

// const handler = {
//   get(obj, prop) {
//     if (prop == "name") {
//       return obj[prop];
//     }
//     return "Not allowed";
//   },
// };

// const proxy4 = new Proxy(student, handler);
// console.log(proxy4.name);    //John
// console.log(proxy4.age); //Not allowed

// TODO: read only view of an object
// const student = {
//   name: "John",
//   age: 25,
// };

// const handler = {
//   set(obj, prop, value) {
//     if (obj[prop]) {
//       console.log("read only");
//     }
//   },
// };

// const proxy5 = new Proxy(student, handler);
// proxy5.name = "Doe"; //read only

// TODO: side effects - call another function when a condition is met
// const myFunction = () => {
//   console.log("execute this function");
// };

// const handler = {
//   set(obj, prop, value) {
//     if (prop === "name" && value === "John") {
//       myFunction();
//     } else {
//       console.log("can only access name property");
//     }
//   },
// };

// const proxy6 = new Proxy({}, handler);
// proxy6.name = "John";    //execute this function
// proxy6.age = 25; //can only access name property
