const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function parseChoice(selection) {
    if (typeof(selection) == "number" && selection < 3) return selection;
    if (typeof(selection) == "string") {
        selection = selection.toLowerCase().replace(/\s/g, "");
        console.log(selection);
        if (selection == "rock") return ROCK;
        if (selection == "paper") return PAPER;
        if (selection == "scissors") return SCISSORS;
    }
    return "Error";
}

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function playRound(e) {
    playerChoice = parseChoice(e.target.textContent);
    computerChoice = computerPlay();
    if (playerChoice == "Error" || computerChoice == "Error") return "Faulty game state";
    switch (playerChoice) {
        case ROCK:
            if (computerChoice == playerChoice) tally("Tie!");
            if (computerChoice == PAPER)  tally("Lose!");
            if (computerChoice == SCISSORS) tally("Win!");
            break;
        case PAPER:
            if (computerChoice == playerChoice) tally("Tie!");
            if (computerChoice == SCISSORS) tally("Lose!");
            if (computerChoice == ROCK) tally("Win!");
            break;
        case SCISSORS:
            if (computerChoice == playerChoice) tally("Tie!");
            if (computerChoice == ROCK) tally("Lose!");
            if (computerChoice == PAPER) tally("Win!");
            break;
    }

}
function tally(result) {
    const playerScore = document.querySelector('.score.player');
    const computerScore = document.querySelector('.score.computer');
    if (result == 'Win!') {
        playerScore.textContent = +playerScore.textContent + 1;
    } else if (result == 'Lose!') {
        computerScore.textContent = +computerScore.textContent + 1;
    }
    if (playerScore.textContent == 5) {
        score('player');

    } else if (computerScore.textContent == 5) {
        score('computer');
    }
}

function score(winner) {
    const score = document.createElement('div');
    score.classList.add('results');
    if (winner == 'player') {
        score.style.cssText = 'color: blue; background: yellow;';
        score.textContent = 'You win! Congratulations! Click \'Reset\' again!';
    } else { 
        score.style.cssText = 'color: red; background: orange;';
        score.textContent = 'You lost! Try again! Click \'Reset\' again!';
    }
    document.querySelector('.scoreboard').appendChild(score);
}

function resetGame() {
    const playerScore = document.querySelector('.score.player');
    const computerScore = document.querySelector('.score.computer');
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    const scoreWinner = document.querySelector('.results');
    if (scoreWinner) scoreWinner.remove();
}
/*
function game() {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Enter your choice:", "Rock, Paper, or Scissors");
        let result = playRound(playerSelection, computerPlay());
        if (result == "Win!") {
            wins++;
        }  else if (result == "Lose!") losses++;
        console.log(result);
    }
    if (wins > losses) return "Winner!";
    else if (losses > wins) return "Loser!";
    return "Tied!";
}
*/

const buttons = document.querySelectorAll('.playerinput');
buttons.forEach(button => button.addEventListener('click', playRound));


