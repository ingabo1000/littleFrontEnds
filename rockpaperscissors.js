const options = ["Rock", "Paper", "Scissors"];
let cScore = 0;
let pScore = 0;
let clickedButton;
let computerPick;
let result = '';
const resetGameBtn = document.querySelector('#reset-game-btn');
let computerScore = document.querySelector('#computer-score');
let playerScore = document.querySelector('#player-score');
let resultMsg = document.querySelector('#results-msg');
let winnerMsg = document.querySelector('#winner-msg');

function getRandomComputerResult(optionsArr){
 let randomValue = Math.floor(Math.random() * 3);
  return optionsArr[randomValue];
}


function myHandler(e){
    clickedButton = e.target.textContent;
    computerPick = getRandomComputerResult(options);

  if(computerPick === 'Rock' && clickedButton === 'Paper'){
      result = 'You Win';
      winnerMsg = 'Paper beats Rock';
      pScore ++;
  } else if(computerPick === 'Rock' && clickedButton === 'Scissors'){
      result = 'Computer Wins'
      winnerMsg = 'Rock beats Scissors'
      cScore ++;
  } else if(computerPick === 'Rock' && clickedButton === 'Rock'){
      result = 'Its a Draw';
      winnerMsg = 'Its a tie. Both chose Rock';
  } else if(computerPick === 'Paper' && clickedButton === 'Rock'){
      result = 'Computer Wins';
      winnerMsg = 'Paper beats Rock';
      cScore ++;
  } else if(computerPick === 'Paper' && clickedButton === 'Paper'){
      result = 'Its a Draw';
      winnerMsg = 'Its a tie. Both chose Paper';
  } else if(computerPick === 'Paper' && clickedButton === 'Scissors'){
      result = 'You Win';
      winnerMsg = 'Scissors beats Paper';
      pScore ++;
  } else if(computerPick === 'Scissors' && clickedButton === 'Rock'){
      result = 'You Win';
      winnerMsg = 'Rock beats Scissors';
      pScore ++;
  } else if(computerPick === 'Scissors' && clickedButton === 'Paper'){
      result = 'Computer Wins';
      winnerMsg = 'Scissors beats Paper';
      cScore ++;
  } else if(computerPick === 'Scissors' && clickedButton === 'Scissors'){
      result = 'Its a Draw'
      winnerMsg = 'Both picked Scissors';
  }

  updateResults();
if(pScore + cScore > 7) {
    resetGameBtn.style.display = 'block';
  }
  }


function updateResults(){
    resultMsg.textContent = `${result}`;
     winnerMsg.textContent = `${winnerMsg}`;
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

function resetScores() {
  cScore = 0;
  pScore = 0;
  computerScore.textContent = 0;
  playerScore.textContent = 0;
  resetGameBtn.style.display = 'none';
}

function restartGame(){
resetGameBtn.addEventListener('click', () => {

  })
} 

const buttons = document.querySelectorAll('.btn-container .btn');
buttons.forEach((button) => {
  button.addEventListener('click', myHandler )
}) 

resetGameBtn.addEventListener('click', () => {
  resetGameBtn.style.display = 'none';
})

//Next steps:
// try to make the resetGameBtn appear after a total of 7 scores.
//remove the click event from the buttons so that the game stops completely
// Make resetGameBtn disappear again after clicking it, start the game from zero scores and add the eventListeners back to the buttons.



