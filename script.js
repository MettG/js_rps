var choices = document.getElementsByClassName("choices");
var compChoices = ["rock", "paper", "scissor"];
var userChoice = "";
var compChoice = "";
var userWins = 0;
var compWins = 0;
var isWin = null;
var isTie = null;


var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

document.getElementById("ui").addEventListener('mouseover', function(e){
    document.getElementById("message").innerHTML = "Select A Choice to Play!";
});

rock.addEventListener('click', () => {
    userChoice = "rock";
    gameStart();
});
paper.addEventListener('click', () => {
    userChoice = "paper";
    gameStart();
});
scissors.addEventListener('click', () => {
    userChoice = "scissors";
    gameStart();
});

function gameStart() {
    document.getElementById("ui").className = "hide";
    compChoice = compChoices[Math.floor(Math.random() * 3)];
    
    if(compChoice === "rock") {
        if(userChoice === "rock") {
            isTie = true;
            isWin = false;
        }else if (userChoice === "paper"){
            isTie = false;
            isWin = true;
        }else if (userChoice === "scissors"){
            isTie = false;
            isWin = false;
        }
    } else if (compChoice === "paper") {
        if(userChoice === "rock") {
            isTie = false;
            isWin = false;
        }else if (userChoice === "paper"){
            isTie = true;
            isWin = false;
        }else if (userChoice === "scissors"){
            isTie = false;
            isWin = true;
        }
    } else if (compChoice === "scissors") {
        if(userChoice === "rock") {
            isTie = false;
            isWin = true;
        }else if (userChoice === "paper"){
            isTie = false;
            isWin = false;
        }else if (userChoice === "scissors"){
            isTie = true;
            isWin = false;
        }
    }
    outcome = "It's a tie!";
    if(isWin) {
        userWins++;
        outcome = "You win!";
    }else if(!isWin && !isTie) {
        compWins++;
        outcome = "You Lose, Bitch ass Nigger!";
    }
    function wait(ms) {setTimeout(()=>{},ms)};
    wait(1500).then(() => {
        document.getElementById("message").innerHTML = outcome;
    });
    wait(1500).then(() => {
        document.getElementById("user_score").innerHTML = "Your Score = " + userWins;
        document.getElementById("comp_score").innerHTML = "Computer Score = " + compWins;
    });

}


for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    console.log(userChoice);
  });
};  