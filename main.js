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

var alphabetBox = document.querySelector(".alphabet");
alphabetBox.addEventListener('click', processClick);

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

function processClick (event) {
  var target = event.target;
  var letter = target.innerHTML.toLowerCase();
  takeTurn(letter);
  target.classList.add("guessed");
}

function takeTurn (letter) {
  // alreadyGuessed should take a letter and return true/false
  // based on if it is in the guesses array or not
  if (includes(guesses, letter)) {
    alert("You already guessed that!");
  } else {
    handleGuess(letter);
  }
  checkGameOver();
}

function handleGuess (letter) {
  guesses.push(letter);
  if (includes(answer, letter)) {
    // display the letter
  } else {
    turnCount -= 1;
  }
}

function includes (container, thing) {
  for (var count = 0; count < container.length; count++) {
    if (container[count] === thing) {
      return true;
    }
  }
  return false;
}
