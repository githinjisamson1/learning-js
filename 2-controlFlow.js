// TODO: operators
// logical operators- &  ||  !
// comparison operators- >  <  >=  <=  ==  ===  !=  !==

// TODO: if...else if...else
// const score = 95;
// if (score > 70) {
//   console.log("Excellent");
// } else if (50 < score < 70) {
//   console.log("Above average");
// } else {
//   console.log("Below average");
// }

// TODO: ternary operator
// let score = 95;
// score > 50 ? console.log("Above average") : console.log("Below average");

// TODO: switch, values are cases
// let name = "Samsons";
// switch (name) {
//   case "John":
//     console.log(`Hello ${name}`);
//     break;
//   case "Doe":
//     console.log(`Hello ${name}`);
//     break;
//   case "Samson":
//     console.log(`Hello ${name}`);
//     break;
//   default:
//     console.log(`Invalid name`);
// }

// TODO: for loop - when the number of iterations is known
// output hello 5 times
// for (let i = 1; i <= 5; i++) {
//   console.log(`Hello ${i}`);
// }

// sum of n natural numbers
// let sum = 0;
// let n = 5;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// console.log(`Sum is: ${sum}`);

// infinite for loop - condition is always true
// for (let i = 1; i > 0; i++) {
//   console.log(i);
// }

// TODO: while loop - execute loopy body as long as condition is true
// output hello 5 times
// let count = 5;
// let i = 1;
// while (i <= count) {
//   console.log(`Hello ${i}`);
//   i++;
// }

// sum of n natural numbers
// let sum = 0;
// let n = 5;
// let i = 1;
// while (i <= 5) {
//   sum += i;
//   i++;
// }
// console.log(`Sum is: ${sum}`)

// sum of positive numbers only
// let num = parseInt(prompt("enter a number"));
// let sum = 0;
// while (num > 0) {
//   sum += num;
//   num = parseInt(prompt("enter a number"));
// }
// console.log(`Sum is: ${sum}`);

// TODO: do...while loop - execute a loopy body atleast once before examining a condition
// output hello 5 times
// let i = 1;
// do {
//   console.log(`Hello ${i}`);
//   i++;
// } while (i <= 5);

// sum of positive numbers
// let num = parseInt(prompt("enter a number"));
// let sum = 0;
// do {
//   sum += num;
//   num = parseInt(prompt("enter a number"));
// } while (num > 0);

// console.log(`sum is: ${sum}`);

// infinite while loop, condition always true
// while (true) {
//   console.log(`Infinite loop`);
// }

// infinite do...while, condition always true
// let count = 1;
// do {
//   console.log(`Infinite do...while`);
// } while (count == 1);

// for loop - when the number of iterations is known
// while, do...while - when the number of iterations is not known

// TODO: break statement - exit a loopy body entirely once a condition is met
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }

// break using while loop
// let i = 1;
// while (i <= 5) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// sum of positive numbers using break
// let num = parseInt(prompt("enter a number"));
// let sum = 0;
// while (true) {
//   if (num < 0) {
//     break;
//   }
//   sum += num;
//   num = parseInt(prompt("enter a number"));
// }
// console.log(`sum is : ${sum}`);

// break with nested loop - terminates the inner loop
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= 5; j++) {
//     if (i === 2) {
//       break;
//     }
//     console.log(`${i} ${j}`);
//   }
// }

// labelled break - avoid, makes code harder to read
// loop1: for (let i = 0; i <= 5; i++) {
//   loop2: for (let j = 0; j <= 5; j++) {
//     if (i === 3) {
//       break loop1;
//     }
//     console.log(`${i} ${j}`);
//   }
// }

// TODO: continue - skip current iteration
// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// sum of odd numbers between 0 and 10
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//   }
//   continue;
// }
// console.log(`sum of odd numbers between 0 and 10 is: ${sum}`);

// labelled continue - avoid, makes code harder to read
// loop1: for (let i = 1; i <= 5; i++) {
//   loop2: for (let j = 1; j <= 5; j++) {
//     if (i === 3) {
//       continue loop1;
//     }
//     console.log(`${i} ${j}`);
//   }
// }

// TODO: switch - used when having many if...else if...else statements
// compares values exactly to examine whether they match
// let score = 95;
// switch (score) {
//   case 95:
//     console.log("excellent");
//     break;
//   case 50:
//     console.log("average");
//     break;
//   case 40:
//     console.log("below average");
//     break;
//   default:
//     console.log("invalid score");
// }

// let name = "Smith";
// switch (name) {
//   case "John":
//     console.log(`Hello ${name}`);
//     break;
//   case "Doe":
//     console.log(`Hello ${name}`);
//     break;
//   case "Samson":
//     console.log(`Hello ${name}`);
//     break;
//   default:
//     console.log(`invalid name`);
// }

// switch with multiple case - grouped together, share the same code
// let fruit = "apple";
// switch (fruit) {
//   case "apple":
//   case "banana":
//   case "cherry":
//     console.log(`the fruit is : ${fruit}`);
//     break;
//   default:
//     console.log(`invalid fruit name`);
// }
