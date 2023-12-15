var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },

  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "f you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
];

var quoteElement = document.getElementById("quote");
var quoteAuthor = document.getElementById("author");
quoteElement.innerHTML = `"${quotes[0].quote}"`;
quoteAuthor.innerHTML = `--${quotes[0].author}`;

let previous = 0;
function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  if (randomNumber !== previous) {
    console.log(randomNumber);
    previous = randomNumber;
    quoteElement.innerHTML = `"${quotes[randomNumber].quote}"`;
    quoteAuthor.innerHTML = `--${quotes[randomNumber].author}`;
  } else {
    newQuote();
  }
}
