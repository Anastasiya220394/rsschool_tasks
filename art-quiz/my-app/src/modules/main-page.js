const mainPage = document.querySelector('.main-page');
const btnPainters = document.querySelector('.btn-painters');
const btnImages = document.querySelector('.btn-images');
const btnSettings = document.querySelector('.btn-settings');
const settingsPage = document.querySelector('.settings');
const paintersPage = document.querySelector('.category-painters');
const imagesPage = document.querySelector('.category-images');

btnSettings.addEventListener('click', () => {
  mainPage.style.display = 'none';
  settingsPage.style.display = 'block';
});

btnPainters.addEventListener('click', () => {
  mainPage.style.display = 'none';
  paintersPage.style.display = 'block';
});

btnImages.addEventListener('click', () => {
  mainPage.style.display = 'none';
  imagesPage.style.display = 'block';
});

export {
  settingsPage, mainPage, paintersPage, imagesPage,
};
