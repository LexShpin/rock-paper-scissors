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

// Creating variables for scores and a winner
let playerPoints = 0;
let computerPoints = 0;
let winner;

// Choose an option for computer
function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    let chosenOption = Math.round(Math.random()*2)

    return options[chosenOption]
}

// Play a round of the game, comparing user's and computer's options and defining who won after 5 rounds
function playRound(playerSelection, computerSelection) {

    // Player's choice displayed
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

    // Computer's choice displayed
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
    

    // Defining the winner of a round
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

    // Displaying the score
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;

    // Finishing the game once a player or a computer has 5 points
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

// Animation for cards with options
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('active');

    rockComp.classList.remove('active');
    scissorsComp.classList.remove('active');
    paperComp.classList.remove('active');
}

// Starting the game over when click "Play" on the modal window
function startOver() {
    modalWon.style.display = 'none';
    modalLost.style.display = 'none';
    overlay.classList.remove('overlay-active');
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
}

// Event listeners for player buttons with options
rockPlayer.addEventListener('click', () => playRound('rock', computerPlay()));
paperPlayer.addEventListener('click', () => playRound('paper', computerPlay()));
scissorsPlayer.addEventListener('click', () => playRound('scissors', computerPlay()));

// Animation for each button
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

// PLay again buttons event listener
playAgainBtns.forEach(button => button.addEventListener('click', startOver));