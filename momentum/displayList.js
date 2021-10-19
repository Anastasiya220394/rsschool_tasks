import { playList } from "./playList.js";
const playListContainer = document.querySelector('.play-list');

playList.forEach((item, index) => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = playList[index].title;
  playListContainer.append(li);
})