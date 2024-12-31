/* Planera logic för att få dator valet i spelet.
1. Skapa en funktion som ger en tal mellan 0-2 (Math.random och Math.floor)
2. Varje siffra är antingen "rock", "paper" eller "scissors" */

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()

function getComputerChoice(num) {
  randomNum = Math.floor(Math.random() * 3)
  
  if (randomNum === 0) {
    return 'rock'
  } else if (randomNum === 1) {
    return 'paper'
  } else {
    return 'scissor'
  }
}

function getHumanChoice(hum) {
  humanChoice = prompt('Rock,Paper or Scissors')

  if (humanChoice.toLowerCase() === 'rock') {
    return 'rock'
  } else if (humanChoice.toLowerCase() === 'paper') {
    return 'paper'
  } else if (humanChoice.toLowerCase() === 'scissors') {
    return 'scissors'
  } else {
    return 'Not at valid choice'
  }
}

function playRound(humanChoice, computerChoice) {
  
  if (humanChoice === 'paper' && computerChoice === 'paper' ||
     humanChoice === 'rock' && computerChoice === 'rock' ||
     humanChoice === 'scissors' && computerChoice === 'scissors') {
      return 'Draw, play again';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
      humanChoice === 'paper' && computerChoice === 'rock' ||
      humanChoice === 'scissors' && computerChoice === 'paper') {
      return 'I win';
    } else {
      return 'You win'
    }
   }

function playGame() {
  
}