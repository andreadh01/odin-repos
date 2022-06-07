function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1
    switch (num) {
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    if ((playerSelection == 'Rock' && computerSelection == 'Paper') ||
        (playerSelection == 'Scissors' && computerSelection == 'Rock') ||
        (playerSelection == 'Paper' && computerSelection == 'Scissors')) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return 0
    } else if (playerSelection == computerSelection) {
        console.log('Tie!')
        return 2
    } else {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return 1
    }
}

function game() {
    let player = 0
    let computer = 0
    for (let index = 0; index < 5; index++) {
        playerSelection = prompt('Choose Rock, Paper or Scissors: ')
        playerSelection = playerSelection.toLowerCase()
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            computerChoice = computerPlay();
            console.log(`Player: ${playerSelection}\nComputer: ${computerChoice}`)
            result = playRound(playerSelection, computerChoice)
            switch (result) {
                case 0:
                    computer = computer + 1
                    break;
                case 1:
                    player = player + 1
                case 2:
                    computer = computer + 1
                    player = player + 1
            }
        } else {
            alert('Choose one of the three options')
            index = index - 1
        }

    }

    if (player > computer) {
        console.log('YOU WON!')
    } else if (player < computer) {
        console.log('YOU LOST!')
    } else {
        console.log('TIE!')
    }
}