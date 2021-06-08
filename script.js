// Rps Game

let playerSelection, userInput, computerSelection, userScore=0, computerScore=0;
document.getElementById('user-results').innerHTML = userScore
document.getElementById('computer-results').innerHTML = computerScore

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
      userScore++;
      document.getElementById('insert-result-2').innerHTML = "You won!"
    } else if (
      (playerSelection == 'rock' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'rock'))
      {
        computerScore++
        document.getElementById('insert-result-2').innerHTML = "You lose!"        
      } else {
        document.getElementById('insert-result-2').innerHTML = "You Tied!"
      }
      document.getElementById('user-results').innerHTML = userScore
      document.getElementById('computer-results').innerHTML = computerScore
      document.getElementById('insert-result').innerHTML = ('player chose ' + playerSelection + ' and computer chose ' + computerSelection)
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