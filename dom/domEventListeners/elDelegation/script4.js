// document.querySelector("#football").addEventListener("click", (e) => {
//   console.log("football clicked");

//   if (e.target.matches("li")) {
//     e.target.style.backgroundColor = "#ccc";
//   }
// });

// document.querySelector("#basketball").addEventListener("click", (e) => {
//   console.log("basketball clicked");

//   if (e.target.matches("li")) {
//     e.target.style.backgroundColor = "#ccc";
//   }
// });

// document.querySelector("#boxing").addEventListener("click", (e) => {
//   console.log("boxing clicked");

//   if (e.target.matches("li")) {
//     e.target.style.backgroundColor = "#ccc";
//   }
// });

// document.querySelector("#tennis").addEventListener("click", (e) => {
//   console.log("tennis clicked");

//   if (e.target.matches("li")) {
//     e.target.style.backgroundColor = "#ccc";
//   }
// });

// document.querySelector("#golf").addEventListener("click", (e) => {
//   console.log("golf clicked");

//   if (e.target.matches("li")) {
//     e.target.style.backgroundColor = "#ccc";
//   }
// });

// TODO:
// optimize above code using event delegation, less code, quality, saves memory
// allows users to append a single event listener to a parent element
// that adds it to all of its children and future descendants that match a selector

const sports = document.querySelector("#sports");

// attach event listener to parent element
sports.addEventListener("click", (e) => {
  console.log(`${e.target.getAttribute("id")} is clicked`);

  if (e.target.matches("li")) {
    e.target.style.backgroundColor = "#ccc";
  }
});

// future descendant - same effects
const li = document.createElement("li");
li.innerText = "rugby";
li.setAttribute("id", "rugby");
li.classList.add("list-item");

sports.appendChild(li);
