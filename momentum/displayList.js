import { playList } from "./playList.js";
const playListContainer = document.querySelector('.play-list');

playList.forEach((item, index) => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = playList[index].title;
  const btn = document.createElement('button');
  btn.classList.add('play', 'player-icon', 'small');
  li.prepend(btn)
  playListContainer.append(li);
})