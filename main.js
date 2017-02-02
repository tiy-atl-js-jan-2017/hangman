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
    showLetter(letter);
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

function showLetter (letter) {
  var blanks = document.querySelectorAll(".board div");
  for (var i = 0; i < answer.length; i++) {
    if (letter === answer[i]) {
      blanks[i].innerHTML = letter;
    }
  }
}

function isWinner () {
  var blanks = document.querySelectorAll(".board div");
  for (var count = 0; count < blanks.length; count++) {
    var letterBox = blanks[count];
    if (letterBox.innerHTML === "_") {
      return false;
    }
  }
  return true;
}

function checkGameOver () {
  if (isWinner()) {
    alert("Congrats! You won!");
  } else if (turnCount === 0) {
    alert("Sorry! You lost sucka!");
  }
}

// function checkGameOverIncludes () {
//   var blanks = document.querySelectorAll(".board div");
//   return !includes(blanks, "_");
// }
