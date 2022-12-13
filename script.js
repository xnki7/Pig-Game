'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let current_score0 = document.querySelector('#current--0');
let current_score1 = document.querySelector('#current--1');
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (player_0.classList.contains('player--active')) {
    if (dice == 1) {
      current_score0.textContent = 0;
      player_0.classList.remove('player--active');
      player_1.classList.add('player--active');
    } else {
      current_score0.textContent =
        Number(current_score0.textContent) + Number(dice);
    }
  } else if (player_1.classList.contains('player--active')) {
    if (dice == 1) {
      current_score1.textContent = 0;
      player_1.classList.remove('player--active');
      player_0.classList.add('player--active');
    } else {
      current_score1.textContent =
        Number(current_score1.textContent) + Number(dice);
    }
  }
});

btnHold.addEventListener('click', function () {
  if (player_0.classList.contains('player--active')) {
    score0El.textContent =
      Number(score0El.textContent) + Number(current_score0.textContent);
    current_score0.textContent = 0;
    if (score0El.textContent >= 100) {
      diceEl.classList.add('hidden');
      player_0.classList.add('player--winner');
      player_0.classList.remove('player--active');
      btnRoll.classList.add('hidden');
      btnHold.classList.add('hidden');
    }
    player_0.classList.remove('player--active');
    player_1.classList.add('player--active');
  } else {
    score1El.textContent =
      Number(score1El.textContent) + Number(current_score1.textContent);
    current_score1.textContent = 0;
    if (score1El.textContent >= 100) {
      diceEl.classList.add('hidden');
      player_1.classList.add('player--winner');
      player_1.classList.remove('player--active');
      btnRoll.classList.add('hidden');
      btnHold.classList.add('hidden');
    }
    player_1.classList.remove('player--active');
    player_0.classList.add('player--active');
  }
});

btnNew.addEventListener('click', function () {
  player_1.classList.remove('player--active');
  player_0.classList.add('player--active');
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  current_score0.textContent = 0;
  current_score1.textContent = 0;
  player_0.classList.remove('player--winner');
  player_1.classList.remove('player--winner');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
});
