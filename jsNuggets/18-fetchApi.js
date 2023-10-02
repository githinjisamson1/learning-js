// TODO: fetch API
// browser API for HTTP requests
// GET by default
// returns promise

// TODO: optional chaining
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then(() => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// TODO: async/await
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
