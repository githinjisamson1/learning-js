// variables
const btnNewQuote = document.querySelector(".btn-new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

// array of objects - {quote, person}
const quotes = [
  {
    quote: `Cumque, animi
        architecto! Velit repellendus, voluptatem sit cumque blanditiis maiores
        fuga beatae.`,
    person: "Samson Githinji",
  },
  {
    quote: `Elit. Cumque, animi
        architecto! Velit repellendus, voluptatem sit cumque blanditiis maiores
        fuga beatae.`,
    person: "John Steinbeck",
  },
  {
    quote: `Adipisicing elit. Cumque, animi
        architecto! Velit repellendus, voluptatem sit cumque blanditiis maiores
        fuga beatae.`,
    person: "Brian Kimani",
  },
  {
    quote: `Consectetur adipisicing elit. Cumque, animi
        architecto! Velit repellendus, voluptatem sit cumque blanditiis maiores
        fuga beatae.`,
    person: "Wilson Mwangi",
  },
  {
    quote: `Amet, consectetur adipisicing elit. Cumque, animi
        architecto! Velit repellendus, voluptatem sit cumque blanditiis maiores
        fuga beatae.`,
    person: "Juliana Andreas",
  },
  {
    quote: `Sit amet, consectetur adipisicing elit. Cumque, animi
        architecto! Velit repellendus, voluptatem sit cumque blanditiis maiores
        fuga beatae.`,
    person: "Mahatma Gandhi",
  },
  {
    quote: `Dolor sit amet, consectetur adipisicing elit. Cumque, animi
        architecto! Velit repellendus, voluptatem sit cumque blanditiis maiores
        fuga beatae.`,
    person: "James Clear",
  },
  {
    quote: `Dolor sit amet, consectetur adipisicing elit. Cumque, animi
        architecto! Velit repellendus, voluptatem sit cumque blanditiis maiores
        fuga beatae.`,
    person: "Abraham Lincoln",
  },
];

btnNewQuote.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[randomNumber].quote;
  person.innerText = quotes[randomNumber].person;
});
