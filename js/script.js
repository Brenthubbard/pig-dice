function PlayerObject(playerName, totalScore, tempScore) {
  this.playerName = playerName;
  this.totalScore = totalScore;
  this.tempScore = tempScore;
}

function switchPlayer() {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
  currentPlayer.tempScore = 0;
}


PlayerObject.prototype.rollDice = function () {
  let currentRoll = Math.floor(Math.random() * 6) + 1 //random number
  if (currentRoll === 1) { //return if 1
    return totalScore;
  } else {
    this.tempScore += currentRoll; //add if !one
    let myChoice = prompt("Would you like to roll again?")
    if (myChoice) {
      rolldice
    } else {
      totaSCore += tempScore;
      playerSwitch;
    }