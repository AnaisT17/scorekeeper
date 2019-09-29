`use strict`;

const buttonScorekeeper1 = document.querySelector("#ctr1");
const playerOneScore = document.querySelector("#score1");
const score1 = 0;

const buttonScorekeeper2 = document.querySelector("#ctr2");
const playerTwoScore = document.querySelector("#score2");
const score2 = 0;

const reset = document.querySelector("#reset");
const winner = document.querySelector("#winner");


buttonScorekeeper1.addEventListener("click", function() {
    const limit = document.querySelector("#limit").value;
    score1++;
    playerOneScore.textContent = score1
    if (score1 == limit || (score1 > score2 && score1 > limit)){
        playerOneScore.classList.add("green");
        buttonScorekeeper1.setAttribute("disabled", true);
        buttonScorekeeper2.setAttribute("disabled", true);
        printWinner ();
    }
})

buttonScorekeeper2.addEventListener("click", function() {
    const limit = document.querySelector("#limit").value;
    score2++;
    playerTwoScore.textContent = score2
    if (score1 == limit || (score1>score2 && score1 > limit)){
        playerTwoScore.classList.add("green");
        buttonScorekeeper1.setAttribute("disabled", true);
        buttonScorekeeper2.setAttribute("disabled", true);
        printWinner ();
    }
})

reset.addEventListener("click", function(){
    buttonScorekeeper1.remove ("disabled");
    buttonScorekeeper2.remove ("disabled");
    playerOneScore.classList.remove ("green");
    playerTwoScore.classList.remove ("green");
    score1= 0;
    score2 = 0;
    playerOneScore.textContent = score1;
    playerTwoScore.textContent = score2;
    document.querySelector("#limit").value = 5;
    winner.textContent = ""
}

function printWinner() {
    if (score1 > score2) {
        winner.textContent = "Joueur1"
    }
    else {
        winner.textContent = "Joueur2"
    }
}