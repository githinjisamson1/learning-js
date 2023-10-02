// TODO: async/await
// async code in sync fashion
// instead of nesting callbacks
// awaits waits till the promise is settled
// await can only be used inside async function
// async function always returns a promise
// error handling - try/catch
// normally done over the wire

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "peter" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight"] },
];

function getUsers(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => {
      return user.name === name;
    });

    if (user) {
      return resolve(user);
    } else {
      reject(`There is no such user: ${name}`);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => {
      return user.userId === userId;
    });

    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      reject(`Wrong id: ${userId}`);
    }
  });
}

// TODO: optional chaining then().catch()
// getUsers("susan")
//   .then((user) => {
//     getArticles(user.id);
//   })
//   .then((articles) => {
//     console.log(articles);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// TODO: async/await
// cleaner, more readable
// writing code in async function

async function getData() {
  try {
    const user = await getUsers("john");
    const articles = await getArticles(user.id);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
}

getData();

// async tasks can be handled using
// callbacks || optional chaining || async/await
