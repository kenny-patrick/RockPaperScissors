function game() {
    let rounds = getNumberOfRounds();

    for (let i = 0; i < rounds; i++) {
        let playerSelection  = getPlayerSelection();
        let computerSelection = computerPlay();
        let simpleResult = playRound(playerSelection, computerSelection);
        console.log(printResultString(simpleResult, playerSelection, computerSelection));
    }
}

function getNumberOfRounds() {
    let numberOfRounds = parseInt(window.prompt("Enter the number of rounds", 3));
    if (isNaN(numberOfRounds)) {
        numberOfRounds = 3;
    }
    return numberOfRounds;
}

function computerPlay() {
    //Select random int between 0 and 2
    let randomInt = Math.floor(Math.random() * 3);

    switch (randomInt) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.error(`computerPlay(): Value ${randomInt} is not valid`);
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "draw";
        } else if (computerSelection == "paper") {
            return "lose";
        } else if (computerSelection == "scissors") {
            return "win";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "win";
        } else if (computerSelection == "paper") {
            return "draw";
        } else if (computerSelection == "scissors") {
            return "lose";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "lose";
        } else if (computerSelection == "paper") {
            return "win";
        } else if (computerSelection == "scissors") {
            return "draw";
        }
    }
}

function printResultString(result, playerSelection, computerSelection) {
    let capitalizeFirstLetter = (selection) => {
        return selection.charAt(0).toUpperCase() + selection.slice(1);
    }
    playerSelection = capitalizeFirstLetter(playerSelection);
    computerSelection = capitalizeFirstLetter(computerSelection);

    if (result == "draw") {
        return `Draw! You both selected ${playerSelection}`;
    } else if (result == "win") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (result == "lose") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerSelection() {
    while (true) {
        playerSelection = window.prompt("Make a selection (Rock, Paper, or Scissors)", "Rock");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            return playerSelection;
        } else {
            window.alert("Invalid input, try again");
        }
    }
}

game();