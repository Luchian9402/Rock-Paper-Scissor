/* Planera logic för att få dator valet i spelet.
1. Skapa en funktion som ger en tal mellan 0-2 (Math.random och Math.floor)
2. Varje siffra är antingen "rock", "paper" eller "scissors" */

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()
const rockBtn = document.querySelector("#rockBtn")
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
const result = document.querySelector("#result")
let humanChoice;
let computerChoice;
function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3)
  
  if (randomNum === 0) {
    return 'rock'
  } else if (randomNum === 1) {
    return 'paper'
  } else {
    return 'scissor'
  }
}

function getHumanChoice() {
  rockBtn.addEventListener("click", () => {
    humanChoice = "rock"
  });
  paperBtn.addEventListener("click", () => {
    humanChoice = "paper"
  });
  scissorBtn.addEventListener("click", () => {
    humanChoice = "scissors"
  })

  

  
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

const rockBtn = document.querySelector("#rockBtn")
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
rockBtn.textContent = "Rock!"

rockBtn.addEventListener("click", () => {
  playRound(humanSelection)
});

computerBtn.addEventListener("click", () => {
  playRound(computerSelection)
});

/*function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    let human = humanChoice
    let computer = computerChoice
    let game = playRound(human, computer)
    
    if (game === 'I win') {
      humanScore ++;
      alert(`I won the round! Score: Me ${humanScore} - You ${computerScore}`)
    } else if (game === 'You win') {
      computerScore ++;
      alert(`You won that round! Score: Me ${humanScore} - You ${computerScore}`)
    } else {
      alert(`Draw! Score: Me ${humanScore} - You ${computerScore}`)
    }
  }
  if (humanScore === 5) {
    alert('I won the match')
  } else if (computerScore === 5) {
    alert('You won the match')
  }
} */






//playGame();