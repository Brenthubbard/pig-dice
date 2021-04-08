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
    console.log("You turn is over!");
    switchPlayer();
    $("#CurrentPlayer").text(currentPlayer.playerName);
    $(".score1").text(currentPlayer.totalScore);
    $(".score2").text(currentPlayer.totalScore);
    $("#tempScore").text(currentPlayer.totalScore);
  } else {
    this.tempScore += currentRoll; //add if !one
    console.log(currentPlayer);

  }
}
//Ui Logic

$(document).ready(function () {
  playerOne = new PlayerObject("playerOne");
  playerTwo = new PlayerObject("playerTwo");
  currentPlayer = playerOne;
  $("#CurrentPlayer").text(currentPlayer.playerName);
  $("#tempScore").text(currentPlayer.tempScore);

  $("button#roll").click(function () {
    $("#CurrentPlayer").text(currentPlayer.playerName);
    currentPlayer.rollDice();
  
  });

  $("#hold").click(function () {
    currentPlayer.totalScore += currentPlayer.tempScore;
    if (currentPlayer.totalScore >= 100) {
      alert(currentPlayer.playerName + " WON!");
      location.reload();
    }
    
    switchPlayer();
    $("#CurrentPlayer").text(currentPlayer.playerName);
    
   
  });
});
 // let myChoice = prompt("Would you like to roll again?")
    // if (myChoice === true) {
    //   currentPlayer.rollDice();
    // } else {
    //   console.log("called else");
    //   this.totalScore += this.tempScore;
    //   switchPlayer();
    // }

    // All this functionality was moved to the buttons 