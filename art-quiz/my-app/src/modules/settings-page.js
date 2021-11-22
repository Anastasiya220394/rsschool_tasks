import { settingsPage, mainPage } from './main-page.js';
import checkboxTime from './category-painters.js';

const saveBtn = document.querySelector('.save-btn');
const btnMute = document.querySelector('.volume-mute-img');
const btnSound = document.querySelector('.volume-img');
const progressVolume = document.querySelector('.input-volume');
const minus = document.querySelector('.btn-minus');
const plus = document.querySelector('.btn-plus');
const time = document.querySelector('#count_time');
const toDefault = document.querySelector('.default-btn');

minus.addEventListener('click', () => {
  time.stepDown();
  localStorage.setItem('time of game', time.value);
});
plus.addEventListener('click', () => {
  time.stepUp();
  localStorage.setItem('time of game', time.value);
});

saveBtn.addEventListener('click', () => {
  settingsPage.style.display = 'none';
  mainPage.style.display = 'block';
});
document.querySelector('.back-settings').addEventListener('click', () => {
  settingsPage.style.display = 'none';
  mainPage.style.display = 'block';
});

// audio
const trueAnswer = document.createElement('audio');
trueAnswer.setAttribute('src', './assets/sounds/true-answer.mp3');

const falseAnswer = document.createElement('audio');
falseAnswer.setAttribute('src', './assets/sounds/false-answer.mp3');

const gameOver = document.createElement('audio');
gameOver.setAttribute('src', './assets/sounds/game-over.mp3');

if (!localStorage.getItem('volume')) {
  trueAnswer.volume = 0.5;
  falseAnswer.volume = 0.5;
  gameOver.volume = 0.5;
} else {
  trueAnswer.volume = progressVolume.value / 100;
  falseAnswer.volume = progressVolume.value / 100;
  gameOver.volume = progressVolume.value / 100;
}

function audioChangeVolume() {
  const volume = progressVolume.value / 100;
  trueAnswer.volume = volume;
  falseAnswer.volume = volume;
  gameOver.volume = volume;
  if (progressVolume.value !== 0) {
    trueAnswer.muted = false;
    falseAnswer.muted = false;
    gameOver.muted = false;
  } else {
    trueAnswer.muted = true;
    falseAnswer.muted = true;
    gameOver.muted = true;
  }
  localStorage.setItem('volume', progressVolume.value);
}

btnMute.addEventListener('click', () => {
  trueAnswer.muted = true;
  falseAnswer.muted = true;
  gameOver.muted = true;
  trueAnswer.volume = 0;
  falseAnswer.volume = 0;
  gameOver.volume = 0;
  progressVolume.value = 0;
  localStorage.setItem('volume', progressVolume.value);
});

btnSound.addEventListener('click', () => {
  trueAnswer.muted = false;
  falseAnswer.muted = false;
  gameOver.muted = false;
  trueAnswer.volume = 0.5;
  falseAnswer.volume = 0.5;
  gameOver.volume = 0.5;
  progressVolume.value = 50;
  localStorage.setItem('volume', progressVolume.value);
});
progressVolume.addEventListener('change', audioChangeVolume);

// time on game
checkboxTime.addEventListener('change', () => {
  localStorage.setItem('game time', JSON.stringify(checkboxTime.checked));
});

window.addEventListener('load', () => {
  checkboxTime.checked = JSON.parse(localStorage.getItem('game time'));
  progressVolume.value = localStorage.getItem('volume');
});

if (!localStorage.getItem('time of game')) {
  time.value = 5;
} else {
  time.value = localStorage.getItem('time of game');
}

toDefault.addEventListener('click', () => {
  time.value = 5;
  progressVolume.value = 50;
  checkboxTime.checked = false;
  localStorage.setItem('game time', JSON.stringify(checkboxTime.checked));
  localStorage.setItem('volume', progressVolume.value);
  localStorage.setItem('time of game', time.value);
});

export { trueAnswer, falseAnswer, gameOver };
