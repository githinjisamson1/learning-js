// primitive - basic, refers to data itself
// non-primitve - complex, reference, refers to memory address not data

//TODO: object
// const student = {
//   name: "John", //property - key:value pair
//   age: 20,
//   gender: "male",
//   greet: function () {
//     //method
//     console.log("hello world");
//   },
//   subjects: {
//     //nested object
//     maths: "A",
//     english: "B",
//   },
//   displayName: function () {
//     console.log(`hello ${this.name}`); //this keyword, access object property
//   },
// };

// console.log(typeof student); //get data type
// console.log(student.name); //dot notation
// student.greet(); //invoke method in object
// console.log(student["age"]); //bracket notation
// console.log(student.subjects.maths); //access nested object property
// student.success = true; //add property to object
// student.displayName(); //this keyword demo, bound to an object

// TODO: constructor function - used to create objects
// function Person() {
//   (this.name = "Doe"), //this refers to current object upon creation
//     (this.age = 25),
//     (this.greet = function () {
//       console.log("hello");
//     });
// }

// object instantiation, can have more than one
// const person1 = new Person();
// const person2 = new Person();
// console.log(typeof person1);
// console.log(person1);
// console.log(person1.name);

// TODO: constructor function with parameters
// function Fruit(name, color) {
//   (this.name = name), (this.color = color);
// }

// const fruit1 = new Fruit("apple", "red");
// const fruit2 = new Fruit("banana", "yellow");
// console.log(fruit1.name);

// TODO: object literal - to create a single object
// constructor function - to create multiple unique objects
// case: object1, object2 derived from object1, object2 = object1
// any change on object2 reflects in object1 (disadvantage of object literal)

// TODO: adding properties and methods in an object
// person1.gender = "male";
// person1.displayName = function () {
//   console.log(`hello ${this.name}`);
// };

// adding properties or methods in a constructor function
// Person.prototype.student = true;
// console.log(person1.student);

// TODO: built in constructors
// creating string, number, boolean as objects
// avoid, slows down the program
// const string1 = new String("Smith");
// const number1 = new Number(123);
// const boolean1 = new Boolean(true);
// console.log(typeof string1);

// TODO: accessor properties - getters and setters
// const student = {
//   firstname: "John",    //property
//   get getName() {   //getter, access value
//     return this.firstname;
//   },
//   set setName(newName) {    //setter, change value
//     this.firstname = newName;
//   },
// };

// getters and setters are accessed without brackets
// console.log(student.getName);
// student.setName = "Doe";
// console.log(student.firstname);

// TODO: add getters and setters to object using Object.defineProperty()
// const fruit = {
//   fruitName: "apple",
// };

// Object.defineProperty(obj, prop, descriptor)
// Object.defineProperty(fruit, "getFruitName", {   //add getter
//   get: function () {
//     return this.fruitName;
//   },
// });

// Object.defineProperty(fruit, "setFruitName", {
//   set: function (newFruitName) { //add setter
//     this.fruitName = newFruitName;
//   },
// });

// console.log(fruit.getFruitName);
// fruit.setFruitName = "banana";
// console.log(fruit.getFruitName);

// TODO: prototype - add properties or methods to constructor function
// function Person() {
//   //functions/objects have prototype by default
//   (this.name = "John"), (this.age = 25);
// }

// const person1 = new Person(); //instantiation
// console.log(Person.prototype); //empty prototype

// TODO: add property/method to constructor function, inherited by all objects
// Person.prototype.gender = "male"; //define prototype
// Person.prototype.greet = function () {
//   console.log("hello world");
// };
// console.log(Person.prototype);
// console.log(person1.gender); //objects inherit props and methods from a prototype

// TODO: changing prototype value
// Person.prototype = { gender: "female" };
// const person2 = new Person();   //new objs will have new value
// console.log(person1.gender);    //previous objs will have old value

// !!!Do not modify prototypes of built in objects, bad practice

// TODO: prototype chaining - check constructor first then prototype
// function Person() {
//   this.name = "John";
// }

// Person.prototype.name = "Doe";
// Person.prototype.age = 25;
// const person1 = new Person();
// console.log(person1.name, person1.age); //John 25

//  TODO: access prototype property of constructor function
// avoid, deprecated
// console.log(person1.__proto__)


