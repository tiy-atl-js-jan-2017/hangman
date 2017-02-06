// TODO
// * Investigate why I couldn't use includes for gameOver
// * Take out old console.logs
// * Fix bug in click handler for the whole alphabet

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
  if (includes(guesses, function (x) { return x === letter; })) {
    alert("You already guessed that!");
  } else {
    handleGuess(letter);
  }
  checkGameOver();
}

function handleGuess (letter) {
  guesses.push(letter);
  if (includes(answer, function (x) { return x === letter; })) {
    showLetter(letter);
  } else {
    turnCount -= 1;
  }
}

function showLetter (letter) {
  var blanks = document.querySelectorAll(".board div");
  for (var i = 0; i < answer.length; i++) {
    if (letter === answer[i]) {
      blanks[i].innerHTML = letter;
    }
  }
}

/*
 HOFs that are relevant to you!

 forEach() callback(x) -> undefined
  // it doesn't return anything to you, so no need to return in your callback

 map()     callback(x) -> [x]
  // make sure you return a value in your callback, and save the result from map in a variable

 filter()  callback(x) -> [x] (smaller)
  // make sure you return a true or false value, and save the result from filter in a variable
  // NOTE: filter uses your callback to decide whether or not to keep an item, it doesn't keep what you return.
  // Just return *true* or *false*

 */


function includes (container, test) {
  // Does anything in container pass "test"?
  for (var count = 0; count < container.length; count++) {
    var currentItem = container[count];
    if (test(currentItem)) {
      return true;
    }
  }
  return false;
}

function forEach (array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

var nums = [1,2,3,4,5];
var squares = nums.map(function (x) { return x * x; });
var names = ["tim", "dom", "tj", "brit"];
var longerNames = names.filter(function (x) { return x.length > 3; });


function isBlank (element) {
  return element.innerHTML === "_";
}

function isWinner () {
  var blanks = document.querySelectorAll(".board div");
  return !includes(blanks, isBlank);
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

var count = 0;
var helloInterval;

function hi100Times () {
  if (count === 100) {
    clearInterval(helloInterval);
  } else {
    console.log("Hi!");
    count++;
  }
}

helloInterval = setInterval(hi100Times, 200);
