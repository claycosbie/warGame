var playerOne = prompt("Player One Name");
var playerTwo = prompt("Player Two Name");

var suites = ["S", "D", "C", "H"]

var playerOneScore = 0;

var playerTwoScore = 0;

var roundWorth = 1;

document.querySelector(".playerOneName").textContent = playerOne;
document.querySelector(".playerTwoName").textContent = playerTwo;

document.querySelector("button").addEventListener("click", cardClick);

function cardClick () {
var randomNumber = Math.floor(Math.random() * 13) + 2;
var secondRandomNumber  = Math.floor(Math.random() * 13) + 2;
var randomSuit = suites[Math.floor(Math.random() * 4)]
var secondRandomSuit = suites[Math.floor(Math.random() * 4)]
var randomCard = randomNumber + randomSuit
var secondRandomCard = secondRandomNumber + secondRandomSuit
if (randomNumber === secondRandomNumber) {
  roundWorth++;
  document.querySelector("h1").textContent = "Draw - Worth " + roundWorth;
} else if (randomNumber > secondRandomNumber) {
  document.querySelector("h1").textContent = playerOne + " Point";
  playerOneScore = playerOneScore + roundWorth;
  playerTwoScore = 0;
  roundWorth = 1;
} else {
  document.querySelector("h1").textContent = playerTwo + " Point";
  playerTwoScore = playerTwoScore + roundWorth;
  playerOneScore = 0;
  roundWorth = 1;
};
document.querySelector(".img1").setAttribute("src", "photos/"+ randomCard + ".png");
document.querySelector(".img2").setAttribute("src", "photos/"+ secondRandomCard + ".png");
if (playerOneScore >= 4) {
  document.querySelector("h1").textContent = playerTwo + " Drinks";
  playerOneScore = 0;
  playerTwoScore = 0;
  roundWorth = 0;
} else if (playerTwoScore >= 4) {
  document.querySelector("h1").textContent = playerOne + " Drinks";
  playerOneScore = 0;
  playerTwoScore = 0;
  roundWorth = 0;
}
document.querySelector(".oneScore").textContent = playerOneScore;
document.querySelector(".twoScore").textContent= playerTwoScore;
}
