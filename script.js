// Rps Game

let playerSelection, userInput, computerSelection, userScore=0, computerScore=0;

// const choices = { 
//     'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
//     'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0},
//     'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
// }

function numberChoice(number) { 
    return ['rock', 'paper', 'scissors'][number];
}

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    computerSelection = numberChoice(computerPlay())
  if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) 
    {
      console.log('player chose ' + playerSelection + ' and computer chose ' + computerSelection)
      userScore++;
      console.log("You won!");
      console.log('user score = ' + userScore + " and computer score = " + computerScore )
    } else if (
      (playerSelection == 'rock' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'rock'))
      {
        console.log('player chose ' + playerSelection + ' and computer chose ' + computerSelection)
        console.log("You lose!");
        computerScore++
        console.log('user score = ' + userScore + " and computer score = " + computerScore )
      } else {
        console.log('player chose ' + playerSelection + ' and computer chose ' + computerSelection)
        console.log('You tied!')
        console.log('user score = ' + userScore + " and computer score = " + computerScore )
      }
}

function game() {
    alert("Let's play Rock Paper Scissors!")
  for (i = 0; i < 5; i++) {
    userInput = prompt("choose your weapon");
    playerSelection = userInput.toLowerCase()
    if (userInput == 'stop'){
        location.reload();
        break;
    } 
    playRound(playerSelection);

  }
  if (userScore > computerScore) {
      alert('You won the game!');
      location.reload()
  } else if  (userScore < computerScore) {
      alert('You lost the game!');
      location.reload()
  } else {
      alert('You tied!');
      location.reload()
  }
}