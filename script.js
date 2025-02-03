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

console.log(aiChoice())

//prompts player input and lowercases the string
function playerChoice(){
  let pChoice = prompt("Choose between Rock, Paper and Scissors" ).toLowerCase()
  if(pChoice == "rock" || pChoice == "paper" || pChoice=="scissors") {return pChoice}
  else {return "This answer isnt valid"} 
}

