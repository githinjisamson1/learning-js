// TODO: JSON - javascript object notation
// jsonData can contain objects and arrays
// jsonData cannot contain functions and values
// put jsonObject, jsonArray in strings

// const jsonObject = `{
//     "name": "John",
//     "age": 25,
//     "gender":"male",
//     "hobby": {
// 	        "reading" : true,
// 	        "gaming" : false,
// 	        "sport" : "football"
//      },
//      "class" : ["JavaScript", "HTML", "CSS"]
// }`;

// const jsonArray = `[
//   { "name": "John", "age": 25 },
//   { "name": "Peter", "age": 24 },
//   { "name": "Susan", "age": 23 },
// ]`;

// TODO: accessing jsonObject
// console.log(jsonObject.hobby.sport); //football
// console.log(jsonObject.class[1]); //HTML

// TODO: convert JSON to js object
// const obj = JSON.parse(jsonObject);
// console.log(typeof obj);
// console.log(obj);

// TODO: convert js object to JSON
// const json = JSON.stringify(obj);
// console.log(typeof json);
// console.log(json);

// TODO: uses of JSON
// transmitting data from a server to a client and vice versa (data interchange)
// JSON is language independent

// TODO: date and time - 4 ways - Date object

// new Date()
// const time = new Date();
// console.log(time);

// new Date(milliseconds)
// const time = new Date(200000000);
// console.log(time)

// new Date(dateString)
// const time = new Date("2023-09-25");    //ymd || ym || ymdt
// console.log(time)

// new Date(y, m, d, h, m, s, m)
// const time = new Date(2023, 8, 25, 5, 49, 0, 0);
// console.log(time);


// FIXME: look into Date Methods
// const time = new Date();
// console.log(time.getFullYear());
// console.log(Date.now());


// no built in function to format dates
// out of range values in Date object, it auto corrects itself
// e.g., 33 Jan ==> 02 Feb