// VARIABLES
let wins = 0
let losses = 0
let ties = 0

// QUERY SELECTORS
const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')
const winsPara = document.querySelector('#win')
const lossPara = document.querySelector('#loss')
const tiePara = document.querySelector('#ties')

// EVENT LISTENERS
btnRock.addEventListener('click', () => { playRound('rock', computerPlay()) })
btnPaper.addEventListener('click', () => { playRound('paper', computerPlay()) })
btnScissors.addEventListener('click', () => { playRound('scissors', computerPlay()) })

//FUNCTIONS
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

function playRound (playerSelection, computerSelection) {
  let human = playerSelection
  let comp = computerPlay()

  if (human == comp) {
    ties += 1
    tiePara.textContent = `Ties: ${ties}`
    return 'You tied!'
  } else if (human == 'rock' && comp == 'paper' || human == 'paper' && comp == 'scissors' ||
    human == 'scissors' && comp == 'rock') {
    losses += 1
    lossPara.textContent = `Losses: ${losses}`
    return 'You Lose ' + comp + ' beats ' + human + '!'
  } else {
    wins += 1
    winsPara.textContent = `Wins: ${wins}`
    return 'You win ' + human + ' beats ' + comp + '!'
  }
}

// console.log(game())
