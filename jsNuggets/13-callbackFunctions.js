// TODO: callback functions
// used in arrayMethods, setTimeout, eventListeners

// callback definition
function toUpperCase(value) {
  console.log(value.toUpperCase());
}

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}
// callback as param
function handleName(name, cb) {
  cb(name);
}

// callback as arg - value/reference
handleName("john", toUpperCase);
handleName("john", reverseString);

const btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  console.log(e.target);
});
