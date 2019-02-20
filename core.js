// Rock Paper Scissors game run from the console in DevTools

// TODO: remove getRAndomINt and add to computerPlay function via anonymous function
function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function computerPlay () {
  let compChoice = getRandomInt(3) // Choose random number 0 , 1, or 2.
  switch (compChoice) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}
// console.log(computerPlay());

function playRound (playerSelection, computerSelection) {
  let human = playerSelection.toLowerCase()
  let comp = computerSelection

  if (human == comp) {
    ties += 1
    console.log('Ties = ' + ties)
    return "You tied!"
  } else if (human == 'rock' && comp == 'paper' || human == 'paper' && comp == 'scissors' ||
    human == 'scissors' && comp == 'rock') {
    losses += 1
    console.log('Losses = ' + losses);
    return 'You Lose ' + comp + ' beats ' + human + '!'
  } else {
    wins += 1
    console.log('Wins = ' + wins)
    return 'You win ' + human + ' beats ' + comp + '!'
  }
}

let wins = 0
let losses = 0
let ties = 0

console.log(game())
