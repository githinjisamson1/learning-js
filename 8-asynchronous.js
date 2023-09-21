// TODO: execute arrow function after 3 seconds
// setTimeout(() => {
//   console.log("hello");
// }, 3000);
// console.log("this message is shown first");

// TODO: setTimeout returns an intervalId
// const intervalId = setTimeout(() => {
//   console.log("hello");
// }, 3000);
// console.log(`id: ${intervalId}`);

// TODO: display time after every 3 seconds
// function showTime() {
//   const date = new Date();
//   const time = date.toLocaleTimeString();
//   console.log(time);
//   setTimeout(showTime, 3000);
// }

// showTime();

// TODO: clearTimeout() - used to cancel setTimeout before execution
// let count = 0;

// function increaseCount() {
//   count += 1;
//   console.log(count);
// }

// let id = setTimeout(increaseCount, 3000);
// // stop setTimeout, cancel setTimeout before it happens
// clearTimeout(id);
// console.log("setTimeout is stopped");

// TODO: passing additional arguments to setTimeout, will be used in function
// function greet(firstname, lastname) {
//   console.log(`Hello ${firstname} ${lastname}`);
// }

// setTimeout(greet, 3000, "John", "Doe");

// TODO: callback function
// callback
// const callback = () => {
//   console.log("executing callback function");
// };

// passing cb as a parameter
// const greet = (name, cb) => {
//   console.log(`hello ${name}`);
//   cb();
// };

// passing callback as an argument
// greet("John", callback);

// TODO: using callback to wait for a result that takes time
// const greet = (name, myFunction) => {
//   console.log("hello world");
//   myFunction(name);
// };

// const myFunction = (name) => {
//   console.log(`hello ${name}`);
// };

// setTimeout(greet, 3000, "John", myFunction);

// TODO: promise and promise chaining
// promises are used to handle asynchronous tasks
// promises: user friendly, easier error handling
// callbacks: difficult to read, difficult error handling

// const count = true;

// const countValue = new Promise((resolve, reject) => {
//   if (count) {
//     resolve("there is a count value");
//   }
//   reject("there is no count value");
// });

// console.log(countValue);

// TODO: promise chaining
// const countValue = new Promise((resolve, reject) => {
//   // resolve("promise resolved");
//   reject("promise rejected");
// });

// countValue
//   .then((result) => {
//     //when promise has resolved
//     console.log(result);
//   })
//   .then(() => {
//     console.log("you can call multiple functions this way");
//   })
//   .catch((result) => {
//     //when promise has rejected
//     console.log(result);
//   })
//   .finally(() => {
//     //will execute always
//     console.log("finally will always execute");
//   });

// FIXME: check on Promise methods

// TODO: async/await
// used to handle asynchronous tasks
// simpler error handling, easier debugging

// async function
// const myFunction = async () => {
//   console.log("async function");
//   return Promise.resolve(1);
// };

// // since it returns a promise, we can chain then(), catch()
// myFunction().then((result) => {
//   console.log(result);
// });

// TODO: await keyword, can only be used inside async function
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved");
//     // reject("promise rejected");
//   }, 4000);
// });

// const asyncFunction = async () => {
//   try {
//     const result = await promise;
//     console.log(result);
//     console.log("hello world");
//   } catch (error) {
//     console.log(error);
//   }
// };

// asyncFunction();

// TODO: setInterval() - do something at intervals of specified time
// const id = setInterval(() => {
//   console.log("hello");
// }, 2000);
// console.log(`id: ${id}`)
// clearInterval(id);

// TODO: display time after every 2 seconds
// const showTime = () => {
//   const date = new Date();
//   const time = date.toLocaleTimeString();
//   console.log(time);
// };

// const id = setInterval(showTime, 2000);
// clearInterval(id);   //cancel setInterval() execution

// TODO: stop setInterval after displaying time 5 times
// let count = 0;

// let intervalId = setInterval(() => {
//   count += 1;
//   if (count === 5) {
//     clearInterval(intervalId);
//   }
//   const date = new Date();
//   const time = date.toLocaleTimeString();
//   console.log(time);
// }, 2000);

// TODO: passing additional arguments
// const greet = (firstname, lastname) => {
//   console.log(`${firstname} ${lastname}`);
// };

// setInterval(greet, 1000, "John", "Doe");
