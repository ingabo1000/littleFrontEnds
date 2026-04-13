const options = ["Rock", "Paper", "Scissors"];
let cScore = 0;
let pScore = 0;
let clickedButton;
let computerPick;
let result = '';
let winnerMessage = '';
const resetGameBtn = document.querySelector('#reset-game-btn');
const buttons = document.querySelectorAll('.btn-container .btn');
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
      winnerMessage = 'Paper beats Rock';
      pScore ++;
  } else if(computerPick === 'Rock' && clickedButton === 'Scissors'){
      result = 'Computer Wins'
      winnerMsg = 'Rock beats Scissors'
      cScore ++;
  } else if(computerPick === 'Rock' && clickedButton === 'Rock'){
      result = 'Its a Draw';
      winnerMessage = 'Its a tie. Both chose Rock';
  } else if(computerPick === 'Paper' && clickedButton === 'Rock'){
      result = 'Computer Wins';
      winnerMessage = 'Paper beats Rock';
      cScore ++;
  } else if(computerPick === 'Paper' && clickedButton === 'Paper'){
      result = 'Its a Draw';
      winnerMessage = 'Its a tie. Both chose Paper';
  } else if(computerPick === 'Paper' && clickedButton === 'Scissors'){
      result = 'You Win';
      winnerMessage = 'Scissors beats Paper';
      pScore ++;
  } else if(computerPick === 'Scissors' && clickedButton === 'Rock'){
      result = 'You Win';
      winnerMessage = 'Rock beats Scissors';
      pScore ++;
  } else if(computerPick === 'Scissors' && clickedButton === 'Paper'){
      result = 'Computer Wins';
      winnerMessage = 'Scissors beats Paper';
      cScore ++;
  } else if(computerPick === 'Scissors' && clickedButton === 'Scissors'){
      result = 'Its a Draw'
      winnerMessage = 'Both picked Scissors';
  }

  updateResults();

if(pScore + cScore > 7) {
    resetGameBtn.style.display = 'block';
    removeEventListeners();
  }
}


function resetScores() {
  cScore = 0;
  pScore = 0;
  computerScore.textContent = 0;
  playerScore.textContent = 0;
  resetGameBtn.style.display = 'none';
}

function updateResults(){
    resultMsg.textContent = `${result}`;
     winnerMsg.textContent = `${winnerMessage}`;
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
}

function removeEventListeners(){
  buttons.forEach((button) => {
    button.removeEventListener('click', myHandler)
  })
}

function addEventListeners(){
  buttons.forEach((button) => {
    button.addEventListener('click', myHandler )
  }) 
}

addEventListeners();

resetGameBtn.addEventListener('click', () => {
  resetGameBtn.style.display = 'none';
    resetScores();
    addEventListeners();
})



