const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "oats",
    category: "breakfast",
  },
  {
    name: "ugali",
    category: "lunch",
  },
  {
    name: "rice",
    category: "lunch",
  },
  {
    name: "chapati",
    category: "dinner",
  },
  {
    name: "mashed potatoes",
    category: "dinner",
  },
];

// unique categories
const categories = [
  "all",
  ...new Set(
    menu.map((menuItem) => {
      return menuItem.category;
    })
  ),
];

console.log(categories);

// modifying HTML
const result2 = document.querySelector("#result2");

categoryButtons = categories.map((category) => {
  return `<button>${category}</button>`;
});

result2.innerHTML = categoryButtons.join(" ");

// TODO: Set
// only stores unique values
// ... to spread values