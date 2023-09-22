// TODO: Document Object Model DOM
// manipulate content, style, structure
// CRUD
// e.g., attempts to submit an incomplete form

// TODO: DOM Tree - document, html, head, title, "This is my website"
// everything is a dom node
// parent, child, sibling, child

// TODO: select elements in dom tree

// getElementById
// const heading = document.getElementById("heading");
// console.log(heading);

// getElementsByClassName
// const movieItem = document.getElementsByClassName("movie-item");
// console.log(movieItem)

// getElementsByTagName
// const listItem = document.getElementsByTagName("li");
// console.log(listItem)

// querySelector with className - selects first instance
// const listItem = document.querySelector(".movie-item");
// console.log(listItem);

// querySelector with id
// const heading = document.querySelector("#heading");
// console.log(heading);

// querySelector with tag name
// const divContainer = document.querySelector("div");
// console.log(divContainer);

// querySelectorAll - selects all
// const movieItems = document.querySelectorAll(".movie-item");
// console.log(movieItems);

// TODO: styling elements
// const heading = document.querySelector("#heading");
// heading.style.color = "yellow";
// console.log(heading);

// styling can only be applied per item
// const listItem = document.querySelectorAll(".movie-item");

// iterating over listItem
// listItem.forEach((item) => {
//   item.style.fontSize = "1.5rem";
// });

// // for (let i = 0; i <= listItem.length; i++) {
// //   listItem[i].style.color = "yellow";
// // }

// console.log(listItem);

// TODO: creating elements
// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// add elements
// ul.appendChild(li);

// modify text
// li.innerText = "The Mind Explained";

// innerText | textContent | innerHTML
// const firtListItem = document.querySelector(".movie-item");
// console.log(firtListItem.innerText); //text
// console.log(firtListItem.textContent); //text plus indents
// console.log(firtListItem.innerHTML); //text plus tags

// TODO: modify attributes and classes

// setAttribute, removeAttribute
// li.setAttribute("id", "mind-explained");
// li.removeAttribute("id");

// getAttribute
// console.log(li.getAttribute("class"));

// modify classes
// li.classList.add("movie-item");
// li.classList.remove("movie-item");
// console.log(li.classList.contains("movie-item"));

// remove element
// li.remove()

// TODO: traversing the dom

// TODO: parent node traversal
// const ul = document.querySelector("ul");

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// parentNode vs parentElement
// const html = document.documentElement;
// console.log(html.parentNode); //everything is a node
// console.log(html.parentElement); //#document is a type of node not an element

// TODO: child node traversal
// const ul = document.querySelector("ul");

// using node property - even indentations are counted as nodes
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor = "blue"; //index notation

// using element property
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// TODO: sibling traversal
// const ul = document.querySelector("ul");
// const div = document.querySelector("div");

// console.log(div.childNodes); //NodeList
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// console.log(div.children); //HTMLCollection
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);


