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
            if (computerSelection == playerChoice) return "Tie!";
            if (computerSelection == PAPER) return "Lose!";
            if (computerSelection == SCISSORS) return "Win!";
            break;
        case PAPER:
            if (computerSelection == playerChoice) return "Tie!";
            if (computerSelection == SCISSORS) return "Lose!";
            if (computerSelection == ROCK) return "Win!";
            break;
        case SCISSORS:
            if (computerSelection == playerChoice) return "Tie!";
            if (computerSelection == ROCK) return "Lose!";
            if (computerSelection == PAPER) return "Win!";
            break;
    }

}

function game() {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = "rock";
        let result = playRound(playerSelection, computerPlay());
        if (result == "Win!") {
            wins++;
        }  else if (result = "Lose!") losses++;
        console.log(result);
    }
    if (wins > losses) return "Winner!";
    else if (losses > wins) return "Loser!";
    //should never tie as games are 5 as of now, but just in case
    return "Tied!";
}

