let playerOne;
let playerTwo;
let currentPlayer;

function PlayerObject(playerName) {
  this.playerName = playerName;
  this.totalScore = 0;
  this.tempScore = 0;
}
//player1
//totalScore = 0
//tempScore = 0
//player2
//totalScore = 0
//tempScore = 0
function switchPlayer() {
  if (currentPlayer.playerName === "playerOne") {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
  currentPlayer.tempScore = 0;
}

//player1.rollDice()
PlayerObject.prototype.rollDice = function () {
  let currentRoll = Math.floor(Math.random() * 6) + 1 //random number
  if (currentRoll === 1) { //return if 1
    alert("You busted!");
    console.log("You busted!");
    switchPlayer();
  } else {
    this.tempScore += currentRoll; //add if !one
    let myChoice = prompt("Would you like to roll again?")
    if (myChoice) {
      console.log(currentPlayer);
      currentPlayer.rollDice();
    } else {
      this.totalScore += this.tempScore;
      switchPlayer();
    }
  }
}


$(document).ready(function () {
  playerOne = new PlayerObject("playerOne");
  playerTwo = new PlayerObject("playerTwo");
  currentPlayer = playerOne;
  console.log(currentPlayer);
});
