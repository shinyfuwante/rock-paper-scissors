const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function parseChoice(selection) {
    if (typeof(selection) == "number" && selection < 3) return selection;
    if (typeof(selection) == "string") {
        selection = selection.toLowerCase();
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

function playRound(playerSelection, computerSelection) {
    playerChoice = parseChoice(playerSelection);
    computerChoice = parseChoice(computerSelection);
    if (playerChoice == "Error" || computerChoice == "Error") return "Faulty game state";
    switch (playerChoice) {
        case ROCK:
            if (computerChoice == playerChoice) return "Tie!";
            if (computerChoice == PAPER) return "Lose!";
            if (computerChoice == SCISSORS) return "Win!";
            break;
        case PAPER:
            if (computerChoice == playerChoice) return "Tie!";
            if (computerChoice == SCISSORS) return "Lose!";
            if (computerChoice == ROCK) return "Win!";
            break;
        case SCISSORS:
            if (computerChoice == playerChoice) return "Tie!";
            if (computerChoice == ROCK) return "Lose!";
            if (computerChoice == PAPER) return "Win!";
            break;
    }

}

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

