function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    playRound()

function playRound(){
    let roundsPlayed = 0
    if (playerScore > computerScore && roundsPlayed == 5){console.log("Congratulations you've won the game");}
    else if (computerScore >= playerScore && roundsPlayed == 5) {console.log("The computer has won the game")}
    else if (computerScore == playerScore && roundsPlayed == 5) {console.log("You draw")}
    else for (let i = 0; i < 5; i++) {gameStart()}    
     
    

function gameStart(){
//prompts player input and lowercases the string
function playerChoice(){
    let pChoice = prompt("Choose between Rock, Paper and Scissors" ).toLowerCase()
    if(pChoice == "rock" || pChoice == "paper" || pChoice=="scissors") {return pChoice}
    else {return "This answer isnt valid"}
  }

  // computer chooses between rock paper and scissors
function aiChoice(){
    let randomNum = Math.floor(Math.random()*3)
    if(randomNum == 1)
        {return "rock"}
    else if (randomNum == 2)
        {return "paper"
    }else
        { return "scissors"} ;
    
    console.log(aiChoice())}
        //play round
function round(pChoice, aiChoice){
    if(pChoice == aiChoice) {console.log("You draw!");}
            else if (pChoice == "rock" && aiChoice == "scissors" || pChoice == "scissors" && aiChoice == "paper" || pChoice == "paper" && aiChoice == "rock")
            {console.log("Congratulations you've won this round"); playerScore = playerScore + 1;}
            else{console.log("You've lost this round, try again"); computerScore = computerScore + 1 ;}
            }
            round(playerChoice(), aiChoice());
        }
    }
}

    playGame();
