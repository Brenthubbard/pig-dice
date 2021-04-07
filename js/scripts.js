function PlayerObject(playerName) {
  this.playerName = playerName;
  let totalScore = 0;
  let tempScore = 0;
}

function switchPlayer() {
  if (currentPlayer.playerName === "playerOne") {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
  currentPlayer.tempScore = 0;
}


PlayerObject.prototype.rollDice = function () {
  let currentRoll = Math.floor(Math.random() * 6) + 1 //random number
  if (currentRoll === 1) { //return if 1
    switchPlayer();
  } else {
    this.tempScore += currentRoll; //add if !one
    let myChoice = prompt("Would you like to roll again?")
    if (myChoice) {
      currentPlayer.rollDice();
    } else {
      this.totalScore += this.tempScore;
      switchPlayer();
    }
  }
}

$(document).ready(function () {
  const playerOne = new PlayerObject("playerOne");
  const playerTwo = new PlayerObject("playerTwo");
  console.log("I'm running");
});
