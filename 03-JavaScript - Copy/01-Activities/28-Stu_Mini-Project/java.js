var playAgain;
var wins = 0;
var losses = 0;
var ties = 0;
var computerOutcome;
var userInput = prompt("Rock, Paper, or Scissors?");
var computerOutcomes = ["Rock", "Paper", "Scissors"];
var compO= "";
computerOutcome = Math.floor(Math.random() * computerOutcomes.length);
confirm("The computer chose: " + computerOutcomes[computerOutcome]);
compO=computerOutcomes[computerOutcome];
function evaluation(userInput,CompO){
    console.log(userInput,CompO);
    if(userInput === "Rock" && CompO === "Paper"){
        losses ++;
    }
    if(userInput === "Rock" && CompO === "Rock"){
        ties ++;
    }
    if(userInput === "Rock" && CompO === "Scissors"){
        wins ++;
    }
    if(userInput === "Paper" && CompO === "Rock"){
        wins ++;
    }
    if(userInput === "Paper" && CompO === "Paper"){
        ties ++;
    }
    if(userInput === "Paper" && CompO === "Scissors"){
        losses ++;
    }
    if(userInput === "Scissors" && CompO === "Paper"){
        wins ++;
    }
    if(userInput === "Scissors" && CompO === "Scissors"){
        ties ++;
    }
    if(userInput === "Scissors" && CompO === "Rock"){
        losses ++;
    }
}
evaluation(userInput,compO);
confirm("Score: " + "Wins: " + wins + "," + " Losses: " + losses + "," + " Ties: " + ties);
playAgain = confirm("Do you want to play again?");  