let quotes = [
  "Remember the goal",
  "Risking is better than regretting",
  "You can do it!",
  "Dream until it's your reality",
  "YES YOU CAN!",
  "Everyday is a new opportunity",
  "Fight for your fairytale",
  "It takes courage to bloom"
];

function showQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerHTML= quotes[randomQuote];
}
