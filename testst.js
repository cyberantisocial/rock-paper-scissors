// Rock paper and scissors game


// computer choice

//Improved computer random choice by outputting strings instead of console.log()

function aiChoice(){
    let randomNum = Math.floor(Math.random()*3)
    if(randomNum == 1)
        {return "rock"}
    else if (randomNum == 2)
        {return "paper"
    }else
        { return "scissors"}
}

//prompts player input and lowercases the string
function playerChoice(){
  let pChoice = prompt("Choose between Rock, Paper and Scissors" ).toLowerCase()
  if(pChoice == "rock" || pChoice == "paper" || pChoice=="scissors") {return pChoice}
  else {return "This answer isnt valid"}
}

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0


function playGame(){
    //set scores to 0 at the beggining of a game


    // Counts score, loops game and determines win/lose/draw conditions for the round 
   
    do {playRound()} while (roundsPlayed<5);
   
    function playRound(pChoice, aiChoice){
        if(pChoice == aiChoice) {console.log("You draw!");}
                else if (pChoice == "rock" && aiChoice == "scissors" || pChoice == "scissors" && aiChoice == "paper" || pChoice == "paper" && aiChoice == "rock")
                {console.log("Congratulations you've won this round"); playerScore = playerScore + 1;}
                else{console.log("You've lost this round, try again"); computerScore = computerScore + 1 ;}
            }} 


          
            
            // Determines win lose draw condition for the game
    
              
        

const humanSelection = playerChoice();
const aiSelection = aiChoice()



   
    playRound(humanSelection, aiSelection)

    console.log(aiSelection)

    console.log(playerScore)
    console.log(computerScore)