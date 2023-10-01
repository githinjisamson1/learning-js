const item = {
  name: "itemName",
  "featured-items": ["item1", "item2"],
};

console.log(item);
console.log(item.name);
console.log(item["featured-items"]);

// dynamically adding object key
let appState = "loading";
let keyName = "computer";

const app = {
  [appState]: true, //{loading: true}
};
app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "John");
updateState("job", "developer");
updateState("gender", "male"); //add
updateState("name", "Peter");
console.log(state);

// TODO: 
// dynamic object keys
// state[keyName] = value
