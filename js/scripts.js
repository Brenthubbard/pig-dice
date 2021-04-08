let playerOne;
let playerTwo;
let currentPlayer;

function PlayerObject(playerName) {
  this.playerName = playerName;
  this.totalScore = 0;
  this.tempScore = 0;
}
//playerOne
//playerName = Player One
//totalScore = 0
//tempScore = 0
//playerTwo
//playerName = Player Two
//totalScore = 0
//tempScore = 0


function switchPlayer() {
  if (currentPlayer.playerName === "Player One") {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
  currentPlayer.tempScore = 0;
}

PlayerObject.prototype.rollDice = function () {
  let currentRoll = Math.floor(Math.random() * 6) + 1 //random number
  if (currentRoll === 1) { //return if 1
    alert("You rolled a 1, your turn is over!");
    switchPlayer();
    $("#currentPlayer").text(currentPlayer.playerName);
    // $(".score1").text(currentPlayer.totalScore);
    // $(".score2").text(currentPlayer.totalScore);
    // $("#tempScore").text(currentPlayer.totalScore);
  } else {
    this.tempScore += currentRoll; //add if !one
  }
}
   

//Ui Logic

$(document).ready(function () {
  playerOne = new PlayerObject("Player One");
  playerTwo = new PlayerObject("Player Two");
  currentPlayer = playerOne;
  $("#currentPlayer").text(currentPlayer.playerName);
  $("#tempScore").text(currentPlayer.tempScore);
  

  $("button#roll").click(function () {
    $("#currentPlayer").text(currentPlayer.playerName);
    currentPlayer.rollDice();
    $("#tempScore").text(currentPlayer.tempScore);
  });
  
  $("#hold").click(function () {
    currentPlayer.totalScore += currentPlayer.tempScore;
    if (currentPlayer.playerName === "Player One") {
      $(".score1").text(currentPlayer.totalScore);
    }
      else $(".score2").text(currentPlayer.totalScore)
   
      if (currentPlayer.totalScore >= 100) {
      alert(currentPlayer.playerName + " WON!");
      location.reload();
    }
    
    switchPlayer();
    $("#currentPlayer").text(currentPlayer.playerName);
    $("#tempScore").text(currentPlayer.tempScore);
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