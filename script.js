'use strict';

let randNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const defaultHighScore = document.querySelector('.highscore').textContent;

//RESET GAME, HIGH SCORE STATS
function again() {
  randNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
}
//COMPARE INPUT NR AND RAND NR FUNC.
function compaereNumber() {
  const inputNumber = Number(document.querySelector('.guess').value);
  // NO INPUT NUMBER
  if (!inputNumber) {
    document.querySelector('.message').textContent = '⛔ No number !';
  }
  //IF NUMBER IS CORRECT
  else if (randNumber === inputNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('body').style.backgroundColor = '#006600';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '7rem';
    document.querySelector('.number').textContent = inputNumber;
    //UPDATE HIGH SCORE IF ITS HIGHER
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //IF NUMBER IS HIGHER THAN RANDOM
  } else if (inputNumber > randNumber) {
    //IF SCORE IS 0
    if (score === 1) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '☃️ You lost';
      document.querySelector('body').style.backgroundColor = '#990000';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '⬆️To High';
    }

    //IF NUMBER IS LOWER THAN RANDOM
  } else if (inputNumber < randNumber) {
    //IF SCORE IS 0
    if (score === 1) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '☃️ You lost';
      document.querySelector('body').style.backgroundColor = '#990000';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '⬇️To Low';
    }
  }
}
//CHECK AND AGAIN BTN FUNCTION CALL(LISTENERS)
document.querySelector('.check').addEventListener('click', compaereNumber);
document.querySelector('.again').addEventListener('click', again);
