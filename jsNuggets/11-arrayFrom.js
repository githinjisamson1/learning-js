// TODO: Array.from()
// turns arrayLike/ish into array - **Object, NodeList, Set, string
// find and filter cannot be used with NodeList - mot on prototype
// convert to array to overcome

// convert string to array
const udemy = "udemy";
console.log(Array.from(udemy));

// convert NodeList to array
const text = document.querySelectorAll(".text");
const newText = Array.from(text).find((item) => {
  return item.textContent === "Person";
});

console.log(newText);

// TODO: pagination
// pass in iterable, callback
// all objects have the length property

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);

// create an array of arrays
const newItems = Array.from({ length: pages }, (_, index) => {
  const startPoint = index * itemsPerPage; //0*14, 1*14, 2*14
  const tempItems = items.slice(startPoint, startPoint + itemsPerPage); //0, 14 | 14, 28 | 28, 52
  return tempItems;
});

console.log(newItems);
