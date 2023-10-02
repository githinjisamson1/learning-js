// TODO: promises
// promise to return some value after some time
// avoid callbackHell
// write async code in async fashion
// async/await
// pending, rejected, fulfilled

// instantiation using constructor
// const value = new Promise((resolve, reject) => {
//   resolve("promise resolved");
//   //   reject("promise rejected");
// });

// // promise chaining
// value
//   .then((value) => {
//     console.log(value);
//   })
//   .then(() => {
//     console.log("promise chaining");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(value);

// example
const number = 2;
const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);

  if (random === number) {
    resolve("you guessed right");
  } else {
    reject("wrong number");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
