// Generate computer answer func
// Generate user answer func
// Run a loop, generating answers on each iteration until user's or computer's points are equal to 5
// On each iteration, generate an answer and compare them, assigning points to the winner
function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    let chosenOption = Math.round(Math.random()*2)

    return options[chosenOption]
}

function userPlay() {
    let userOption = prompt('rock, paper or scissors?').toLowerCase()

    return userOption
}

let userPoints = 0
let computerPoints = 0

while (userPoints < 5 && computerPoints < 5) {
    let computerOption = computerPlay()
    let userOption = userPlay()

    if (computerOption == 'rock' && userOption == 'paper') {
        userPoints++
    } else if (computerOption == 'rock' && userOption == 'scissors') {
        computerPoints++
    } else if (computerOption == 'paper' && userOption == 'rock') {
        computerPoints++
    } else if (computerOption == 'paper' && userOption == 'scissors') {
        userPoints++
    } else if (computerOption == 'scissors' && userOption == 'rock') {
        userPoints++
    } else if (computerOption == 'scissors' && userOption == 'paper') {
        computerPoints++
    }

    console.log(`User points: ${userPoints}`)
    console.log(`Computer points: ${computerPoints}`)
}