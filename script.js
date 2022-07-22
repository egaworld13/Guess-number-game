'use strict';

let randNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const defaultHighScore = document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click', function () {
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

    //UPDATE HIGH SCORE IF ITS HIGHER
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //IF NUMBER IS HIGHER THAN RANDOM
  } else if (inputNumber > randNumber) {
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '⬆️To High';
    //IF SCORE IS 0

    if (score <= 0) {
      document.querySelector('.message').textContent = '☃️ You lost';
      document.querySelector('body').style.backgroundColor = '#990000';
    } else {
      score--;
    }

    //IF NUMBER IS LOWER THAN RANDOM
  } else if (inputNumber < randNumber) {
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '⬇️To Low';

    //IF SCORE IS 0
    if (score <= 0) {
      document.querySelector('.message').textContent = '❌ You lost';
      document.querySelector('body').style.backgroundColor = '#990000';
    } else {
      score--;
    }
  }
});
//RESET GAME, HIGH SCORE STAYS
document.querySelector('.again').addEventListener('click', function () {
  randNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.message').textContent = 'Start guessing...';
});
