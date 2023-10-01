// TODO: callbackHell
// 1s, 3s, 2s - execute in sequence
// nesting callbacks - callback hell
// pyramid like, hard to read and manage code

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const button = document.querySelector(".change");

button.addEventListener("click", function (e) {
//   console.log(e.target);

  setTimeout(() => {
    first.style.color = "red";

    setTimeout(() => {
      second.style.color = "blue";

      setTimeout(() => {
        third.style.color = "green";
      }, 2000);
    }, 3000);
  }, 1000);
});
