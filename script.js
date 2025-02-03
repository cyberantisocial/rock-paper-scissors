// Rock paper and scissors game


// computer choice



function aiChoice(){
    let randomNum = Math.floor(Math.random()*3)
    if(randomNum === 1){ console.log("Rock")}
    else if (randomNum === 2){console.log("Paper")}
    else{console.log("Scissors")}
}

aiChoice()