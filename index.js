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

function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    let chosenOption = Math.round(Math.random()*2)

    return options[chosenOption]
}

function userPlay(btn) {
    let userOption;

    if (btn == 'rock') userOption = 'rock';
    if (btn == 'paper') userOption = 'paper';
    if (btn == 'scissors') userOption = 'scissors';

    return userOption
}

rockPlayer.addEventListener('click', () => userPlay('rock'));
paperPlayer.addEventListener('click', () => userPlay('paper'));
scissorsPlayer.addEventListener('click', () => userPlay('scissors'));

let userPoints = 0;
let computerPoints = 0;

playerScore.textContent = userPoints;
computerScore.textContent = computerPoints;

// while (userPoints < 5 && computerPoints < 5) {
//     let computerOption = computerPlay()
//     let userOption = userPlay()

//     if (computerOption == 'rock' && userOption == 'paper') {
//         userPoints++
//     } else if (computerOption == 'rock' && userOption == 'scissors') {
//         computerPoints++
//     } else if (computerOption == 'paper' && userOption == 'rock') {
//         computerPoints++
//     } else if (computerOption == 'paper' && userOption == 'scissors') {
//         userPoints++
//     } else if (computerOption == 'scissors' && userOption == 'rock') {
//         userPoints++
//     } else if (computerOption == 'scissors' && userOption == 'paper') {
//         computerPoints++
//     }

//     console.log(`User points: ${userPoints}`)
//     console.log(`Computer points: ${computerPoints}`)
// }