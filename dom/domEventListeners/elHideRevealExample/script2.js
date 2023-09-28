const btnReveal = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");
console.log(btnReveal, hiddenContent);

const btnRevealEventHandler = (e) => {
  e.preventDefault();

  //   remove reveal-btn to hide content
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    // add reveal-btn to display content
    hiddenContent.classList.add("reveal-btn");
  }
};

btnReveal.addEventListener("click", btnRevealEventHandler);

// TODO: toggle hamburger menu, display error messages
