document.addEventListener("DOMContentLoaded", () => {
    let pChoice;
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    const btnRock = document.querySelector("#rock");
    const btnPaper = document.querySelector("#paper");
    const btnScissors = document.querySelector("#scissors");
    const divButton = document.querySelector(".buttons");
    const statDiv = document.querySelector("#stats")

    const scores = document.createElement("div")
    const pScoreContent = document.createElement ("p")
    const comScoreContent = document.createElement("p")
    const gameWinner = document.createElement ("p")
    statDiv.append(scores)
    scores.append(pScoreContent)
    scores.append(comScoreContent)    
    scores.append(gameWinner)

    function scoreCount(){
       pScoreContent.textContent = "Player score: " + playerScore;
       comScoreContent.textContent = "Computer score: " + computerScore
    }
    


    btnRock.addEventListener("click", () => {
        pChoice = "rock";
        playRound();
    });

    btnPaper.addEventListener("click", () => {
        pChoice = "paper";
        playRound();
    });

    btnScissors.addEventListener("click", () => {
        pChoice = "scissors";
        playRound();
    });


    function aiChoice() {
        let randomNum = Math.floor(Math.random() * 3);
        if (randomNum === 0) {
            return "rock";
        } else if (randomNum === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function playRound() {
        let computerChoice = aiChoice();
        console.log("Player choice:", pChoice);
        console.log("Computer choice:", computerChoice);

        if (pChoice === computerChoice) {
            console.log("You draw!"); roundsPlayed += 1; scoreCount(); ;
        } else if (
            (pChoice === "rock" && computerChoice === "scissors") ||
            (pChoice === "scissors" && computerChoice === "paper") ||
            (pChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("Congratulations, you've won this round!");
            playerScore += 1;
            roundsPlayed += 1
            scoreCount()
        } else {
            console.log("You've lost this round, try again.");
            computerScore += 1;
            roundsPlayed += 1
            scoreCount()
        }


        if (roundsPlayed >= 5) {
            if (playerScore > computerScore) {
              gameWinner.textContent = "Congratulations, you've won the game!"; roundsPlayed = 0;
                computerScore = 0
                playerScore = 0
            
            } else if (computerScore > playerScore) {
                gameWinner.textContent = "The computer has won the game!"; roundsPlayed = 0;
                computerScore = 0 
                playerScore = 0
            } else {
                gameWinner.textContent = "It's a draw!"; roundsPlayed = 0;
                computerScore = 0
                playerScore = 0
            }
        }
    }
})

