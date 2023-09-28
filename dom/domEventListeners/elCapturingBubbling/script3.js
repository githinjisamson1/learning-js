// event propagation - "electricity running through a wire"
// 3 phases - event capturing, target, event bubbling
// event capturing - root to target, down the dom tree
// event bubbling - target to root, up the dom tree

// event listeners
// third parameter - true > eventCapturing, false > eventBubbling
// false by default - bottom to top

window.addEventListener(
  "click",
  () => {
    console.log("Window");
  },
  false
);

document.addEventListener(
  "click",
  () => {
    console.log("Document");
  },
  false
);

document.querySelector(".div2").addEventListener(
  "click",
  (e) => {
    // e.stopPropagation(); //stop propagation at div2
    console.log("Div2");
  },
  { once: true } //div1 event fires off only once
);

document.querySelector(".div1").addEventListener(
  "click",
  () => {
    console.log("Div1");
  },
  false
);

document.querySelector(".button").addEventListener(
  "click",
  (e) => {
    e.preventDefault(); //prevent default behavior
    console.log((e.target.innerText = "clicked"));
  },
  false
);
