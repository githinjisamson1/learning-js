const fruits = ["apple", "banana", "cherry"];

// destructuring
const [apple, banana, cherry] = fruits;
console.log(apple, banana, cherry);

// swapping variables
// old way used temporary variable
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y);

