'use strict';
// let guess = document.querySelector('.message').textContent;
// console.log(guess);
// guess = '🎉Correct Number';
// console.log(guess);

// let number = document.querySelector('.number').textContent;
// number = 10;
// let number = document.querySelector('.number').textContent;
// let guess = document.querySelector('.message').textContent; // select text content of element.
// document.querySelector('.guess').value; // read value of input field you can asign it.

// const x = function () {};
// //button even listener
// document.querySelector('.check').addEventListener('click', x());
//Create random number

// let guess = document.querySelector('.message').textContent;
// let highScore = document.querySelector('.highscore').textContent;

// read input number on click and compare with randnumber highscore
// document.querySelector('.check').addEventListener('click', compareNumber());

// while (score > 0) {
//   document.querySelector('.check').addEventListener('click', compareNumber());
// }

// document.querySelector('.check', compareNumber());
const randNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const defaultHighScore = document.querySelector('.highscore').textContent;
// show random number
document.querySelector('.number').textContent = randNumber;

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
document.querySelector('.again').addEventListener('click', function () {});

// document.querySelector('body').style.backgroundColor = '#60b347';
// document.querySelector('.number').style.width = '30rm';
// switch (inputNumber) {
//   case randNumber === inputNumber:
//     document.querySelector('.message').textContent = '🎉Correct Number';
//     break;
//   case inputNumber > randNumber:
//     document.querySelector('.message').textContent = 'To High';
//     break;
//   case inputNumber < randNumber:
//     document.querySelector('.message').textContent = 'To Low';
//     break;
//   default:
//     document.querySelector('.message').textContent = '⛔ No number !';
//     break;
// }
