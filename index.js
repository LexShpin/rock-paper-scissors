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

const modalWon = document.querySelector('.modal-won');
const modalLost = document.querySelector('.modal-lost');
const overlay = document.querySelector('.overlay');

const playAgainBtns = document.querySelectorAll('.modal__button');

let playerPoints = 0;
let computerPoints = 0;
let winner;

function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    let chosenOption = Math.round(Math.random()*2)

    return options[chosenOption]
}


function playRound(playerSelection, computerSelection) {

    switch(playerSelection) {
        case 'rock':
            rockPlayer.classList.add('active');
            break;
        case 'paper':
            paperPlayer.classList.add('active');
            break;
        case 'scissors':
            scissorsPlayer.classList.add('active');
            break;
        default:
            break;
    }

    switch(computerSelection) {
        case 'rock':
            rockComp.classList.add('active');
            break;
        case 'paper':
            paperComp.classList.add('active');
            break;
        case 'scissors':
            scissorsComp.classList.add('active');
            break;
        default:
            break;
    }
    

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

    if (playerPoints == 5) {
        modalWon.style.display = 'flex';
        overlay.classList.add('overlay-active');
        playerPoints = 0;
        computerPoints = 0;
    } else if (computerPoints == 5) {
        modalLost.style.display = 'flex';
        overlay.classList.add('overlay-active');
        playerPoints = 0;
        computerPoints = 0;
    }

    return;
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('active');

    rockComp.classList.remove('active');
    scissorsComp.classList.remove('active');
    paperComp.classList.remove('active');
}

function startOver() {
    modalWon.style.display = 'none';
    modalLost.style.display = 'none';
    overlay.classList.remove('overlay-active');
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
}

rockPlayer.addEventListener('click', () => playRound('rock', computerPlay()));
paperPlayer.addEventListener('click', () => playRound('paper', computerPlay()));
scissorsPlayer.addEventListener('click', () => playRound('scissors', computerPlay()));

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

playAgainBtns.forEach(button => button.addEventListener('click', startOver));