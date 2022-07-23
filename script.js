'use strict';
//ASSING VARIABLE
let randNumber = generateNumber();
let score = 5;
let highScore = 0;
const defaultHighScore = document.querySelector('.highscore').textContent;

//RAND NR FUNC
function generateNumber() {
  let random = Math.trunc(Math.random() * 20) + 1;
  return random;
}

//ADD MESSAGE FUNC
function message(className, message) {
  document.querySelector(className).textContent = message;
}

//RESET GAME, HIGH SCORE STATS
function again() {
  randNumber = generateNumber();
  score = 5;
  message('.score', score);
  message('.message', 'Start guessing');
  message('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
}

//COMPARE INPUT NR AND RAND NR FUNC.
function compaereNumber() {
  const inputNumber = Number(document.querySelector('.guess').value);
  // NO INPUT NUMBER
  if (!inputNumber) {
    message('.message', '⛔ No number !');
  }
  //IF NUMBER IS CORRECT
  else if (randNumber === inputNumber) {
    message('.message', '🎉Correct Number');
    document.querySelector('body').style.backgroundColor = '#006600';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '7rem';
    message('.number', inputNumber);

    //UPDATE HIGHSCORE IF ITS HIGHER
    if (highScore < score) {
      highScore = score;
      message('.highscore', highScore);
    }
  }
  //IF NUMBER IS HIGHER OR LOWER
  else if (inputNumber !== randNumber) {
    if (score === 1) {
      message('.score', 0);
      message('.message', '☃️ You lost');
      document.querySelector('body').style.backgroundColor = '#990000';
    } else {
      score--;
      message('.score', score);
      message('.message', inputNumber > randNumber ? '⬆️To High' : '⬇️To Low');
    }
  }
}
//CHECK AND AGAIN BTN FUNCTION CALL(LISTENERS)
document.querySelector('.check').addEventListener('click', compaereNumber);
document.querySelector('.again').addEventListener('click', again);
