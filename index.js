// Generate computer answer func
// Generate user answer func
// Run a loop, generating answers on each iteration until user's or computer's points are equal to 5
// On each iteration, generate an answer and compare them, assigning points to the winner
const rockPlayer = document.querySelector('.rock-btn-player');
const paperPlayer = document.querySelector('.paper-btn-player');
const scissorsPlayer = document.querySelector('.scissors-btn-player');

const rockComp = document.querySelector('.rock-btn-comp');
const paperComp = document.querySelector('.paper-btn-comp');
const scissorsComp = document.querySelector('.scissors-btn-comp');

const playerScore = document.querySelector('.player__score');
const computerScore = document.querySelector('.computer__score');

let playerPoints = 0;
let computerPoints = 0;
let winner;

function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    let chosenOption = Math.round(Math.random()*2)

    return options[chosenOption]
}


function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);

    

    if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerPoints++;
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerPoints++;
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerPoints++;
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        playerPoints++;
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        playerPoints++;
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerPoints++;
    }

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;

    console.log(playerPoints);
    console.log(computerPoints);

    if (playerPoints == 5) {
        console.log('Player won!');
        playerPoints = 0;
        computerPoints = 0;
    } else if (computerPoints == 5) {
        console.log('Computer won!');
        playerPoints = 0;
        computerPoints = 0;
    }

    return;
}

rockPlayer.addEventListener('click', () => playRound('rock', computerPlay()));
paperPlayer.addEventListener('click', () => playRound('paper', computerPlay()));
scissorsPlayer.addEventListener('click', () => playRound('scissors', computerPlay()));

