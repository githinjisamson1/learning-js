// event listeners
// 1 - global on event attribute, directly inside an element
// 2 - js addEventListener

const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

// click
const btn2EventHandler = (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log("Button 2 clicked!");
};

btn2.addEventListener("click", btn2EventHandler);

// mouseover
const btn3EventHandler = (e) => {
  e.preventDefault();
  console.log(e.target);
  btn3.style.backgroundColor = "blue";
  btn3.style.color = "white";
};

btn3.addEventListener("mouseover", btn3EventHandler);
