var wordBank = [
  "coffee", "bourbon", "sleep", "iron",
  "yard", "challenges", "games", "weekends",
  "concerts", "pints", "friday", "disestablishmentarianism",
  "lynx", "falcons", "super", "bowl",
  "patriots", "winner", "cheat", "commercial"
];
var turnCount = 7;
var guesses = [];
var answer = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(answer);
console.log(answer.length);

function drawBoard (word) {
  var boardBox = document.querySelector(".board");
  for (var count = 0; count < word.length; count++) {
    var newBlank = "<div>_</div>";
    boardBox.innerHTML += newBlank;
  }
}

drawBoard(answer);
