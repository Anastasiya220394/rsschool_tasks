import { paintersPage, mainPage, settingsPage } from "./main-page";
import { trueAnswer, falseAnswer, gameOver } from "./settings-page";
import "./pictures-result";

const btnHome = document.querySelector(".btn-home-painters");
const quizBlock = document.querySelector(".quiz-block");
const checkboxTime = document.querySelector("#input-time");
const categories = document.querySelectorAll("[class^='category-painters-']");

btnHome.addEventListener("click", () => {
  paintersPage.style.display = "none";
  mainPage.style.display = "block";
});

let score = [];
let currentPos = 0;

async function getData(e) {
  const res = await fetch("./data/images.json");
  const data = await res.json();
  let categoryArray = [];

  if (e.className === "category-painters-realism") {
    categoryArray = data.filter((item) => item.category === "realism");
  }
  if (e.className === "category-painters-impressionism") {
    categoryArray = data.filter((item) => item.category === "impressionism");
  }
  if (e.className === "category-painters-renaissance") {
    categoryArray = data.filter((item) => item.category === "renaissance");
  }
  if (e.className === "category-painters-portrait") {
    categoryArray = data.filter((item) => item.category === "portrait");
  }
  if (e.className === "category-painters-painting") {
    categoryArray = data.filter((item) => item.category === "painting");
  }
  if (e.className === "category-painters-landscape") {
    categoryArray = data.filter((item) => item.category === "landscape");
  }
  if (e.className === "category-painters-avantgarde") {
    categoryArray = data.filter((item) => item.category === "avant-garde");
  }
  if (e.className === "category-painters-surrealism") {
    categoryArray = data.filter((item) => item.category === "surrealism");
  }
  if (e.className === "category-painters-romanticism") {
    categoryArray = data.filter((item) => item.category === "romanticism");
  }
  if (e.className === "category-painters-expressionism") {
    categoryArray = data.filter((item) => item.category === "expressionism");
  }
  if (e.className === "category-painters-religion") {
    categoryArray = data.filter((item) => item.category === "religion");
  }
  if (e.className === "category-painters-marine") {
    categoryArray = data.filter((item) => item.category === "marine");
  }

  const cutCategoryArray = categoryArray.slice(0, 10);

  const key = e.className;

  paintersPage.style.display = "none";
  quizBlock.style.display = "block";

  const num = cutCategoryArray[currentPos].imageNum;
  const authorReal = cutCategoryArray[currentPos].author;
  let authorRandom = data[Math.floor(Math.random() * data.length)].author;
  let authorRandom2 = data[Math.floor(Math.random() * data.length)].author;
  let authorRandom3 = data[Math.floor(Math.random() * data.length)].author;

  const src = `./assets/images/mobile/${num}.jpg`;
  const arrAuthors = [authorReal, authorRandom, authorRandom2, authorRandom3];

  if (authorRandom === authorReal) {
    authorRandom =
    data[
        Math.floor(Math.random() * data.length)
      ].author;
  }
  if (authorRandom2 === authorReal) {
    authorRandom2 =
    data[
        Math.floor(Math.random() * data.length)
      ].author;
  }
  if (authorRandom3 === authorReal) {
    authorRandom3 =
    data[
        Math.floor(Math.random() * data.length)
      ].author;
  }

  if (arrAuthors[2] === arrAuthors[3]) {
    arrAuthors[2] =
    data[
        Math.floor(Math.random() * data.length)
      ].author;
  }
  if (arrAuthors[4] === arrAuthors[3]) {
    arrAuthors[4] =
    data[
        Math.floor(Math.random() * data.length)
      ].author;
  }
  if (arrAuthors[4] === arrAuthors[3]) {
    arrAuthors[4] =
    data[
        Math.floor(Math.random() * data.length)
      ].author;
  }

  displayQuestions();

  const questionImage2 = document.querySelector(".question-image2");
  const authorModal = document.querySelector(".author-modal");
  const pictureModal = document.querySelector(".picture-modal");
  const yearModal = document.querySelector(".year-modal");
  const questionImage = document.querySelector(".question-image");

  questionImage.src = src;

  const answers = Array.from(
    document.querySelector(".answers-painters").children
  );
  const item = answers[Math.floor(Math.random() * answers.length)];
  item.textContent = authorReal;
  const index = answers.indexOf(item);
  if (index > -1) {
    answers.splice(index, 1);
  }

  answers[0].textContent = authorRandom;
  answers[1].textContent = authorRandom2;
  answers[2].textContent = authorRandom3;

  questionImage2.src = src;
  authorModal.textContent = `${authorReal},` + " ";
  pictureModal.textContent = cutCategoryArray[currentPos].name;
  yearModal.textContent = `${cutCategoryArray[currentPos].year} ` + "г.";

  const resultRound = document.querySelector(".results-painters");
  const trueImg = document.querySelector(".trueAnswer");
  const overlay = document.querySelector(".overlay");
  const modalQuestion = document.querySelector(".modal-question");

  function getNext() {
    if (currentPos < 9) {
      currentPos += 1;
      setTimeout(() => {
        getData(e);
      }, 1000);
    } else {
      currentPos = 0;
      resultRound.classList.toggle("show");
      overlay.style.display = "block";
      modalQuestion.classList.toggle("show");
      localStorage.setItem(key, score);
      score = [];
      updateScore(key);
      gameOver.play();
      modal();
    }
  }
  const answer = document.querySelector(".answers-painters");
  answer.addEventListener("click", (event) => {
    modalQuestion.classList.toggle("show");
    overlay.style.display = "block";
    if (event.target.textContent === authorReal) {
      score.push(cutCategoryArray[currentPos].imageNum);
      event.target.style.background = "green";
      trueAnswer.play();
      trueImg.src = "./assets/svg/true.svg";
    } else {
      event.target.style.background = "red";
      falseAnswer.play();
      trueImg.src = "./assets/svg/false.svg";
    }
  });
  const btnContinue = document.querySelector(".continue-question");
  btnContinue.addEventListener("click", getNext);

  const modalCloseGame = document.querySelector(".modal-to-close");

  document.querySelector(".back-btn").addEventListener("click", () => {
    overlay.style.display = "block";
    modalCloseGame.classList.toggle("show");
  });
  document
    .querySelector(".modal-to-close__btn")
    .addEventListener("click", () => {
      overlay.style.display = "none";
      modalCloseGame.classList.toggle("show");
      modalQuestion.classList.toggle("show");
    });
  document.querySelector(".cancel").addEventListener("click", () => {
    overlay.style.display = "none";
    modalCloseGame.classList.toggle("show");
  });
  document.querySelector(".yes").addEventListener("click", () => {
    quizBlock.style.display = "none";
    paintersPage.style.display = "block";
  });

  function modal() {
    let b = localStorage.getItem(key);
    if (b) b = b.split(",").length;

    if (b <= 7) {
      document.querySelector(".modal-results-cup").src =
        "./assets/svg/game-over-cup.svg";
      document.querySelector(".congr").textContent = "Сыграем еще?";
      document.querySelector(".score-results").textContent =
        `${"Game over" + " "}${b}/` + "10";
      document.querySelector(".results-painters__btnHome").textContent =
        "Отмена";
      document.querySelector(".results-painters__btnNext").textContent = "Да";
    }
    if (b === 0) {
      document.querySelector(".modal-results-cup").src =
        "./assets/svg/game-over-cup.svg";
      document.querySelector(".congr").textContent = "Сыграем еще?";
      document.querySelector(".score-results").textContent =
        "Game over" + " " + "0" + "/" + "10";
      document.querySelector(".results-painters__btnHome").textContent =
        "Отмена";
      document.querySelector(".results-painters__btnNext").textContent = "Да";
    } else {
      document.querySelector(".modal-results-cup").src =
        "./assets/svg/champion-cup.svg";
      document.querySelector(".congr").textContent = `${"Поздравляем!" + " "}${b}/` + "10";
      document.querySelector(".results-painters__btnHome").textContent =
        "Домой";
      document.querySelector(".results-painters__btnNext").textContent =
        "Следующая игра";
    }
  }

  // модалка в конце

  document
    .querySelector(".modal-results-close__btn")
    .addEventListener("click", () => {
      resultRound.classList.toggle("show");
      overlay.style.display = "none";
    });

  document
    .querySelector(".results-painters__btnHome")
    .addEventListener("click", () => {
      resultRound.classList.toggle("show");
      quizBlock.style.display = "none";
      mainPage.style.display = "block";
    });
  document
    .querySelector(".results-painters__btnNext")
    .addEventListener("click", () => {
      resultRound.classList.toggle("show");
      document.querySelector(".question-block").style.display = "none";
      paintersPage.style.display = "block";
    });

  if (checkboxTime.checked) {
    document.querySelector(".timer-picture").style.display = "block";
    document.querySelector(".progress-time span").style.display = "block";
    timer();
  }

  function timer() {
    let count = document.querySelector("#count_time").value;
    const interval = setInterval(() => {
      document.querySelector(".progress-time span").innerHTML = `${
        "00" + " " + ":" + " "
      }${count}`;
      count--;
      if (count === 0) {
        clearInterval(interval);
        falseAnswer.play();
        getNext();
        modalQuestion.style.display = "none";
      }
      if (quizBlock.style.display === "none") {
        clearInterval(interval);
      }
      if (modalQuestion.classList.contains("show")) {
        clearInterval(interval);
      }
    }, 1000);
  }
}

categories.forEach((cat) => {
  const scoreBtn = cat.getElementsByTagName("button")[0];
  scoreBtn.addEventListener("click", (e) => {
    document.querySelector(".results-page").style.display = "block";
    paintersPage.style.display = "none";
    const key = e.target.parentNode.className;
    let b = localStorage.getItem(key);
    if (b) b = b.split(",").length;
    document.querySelector(".score-pageResults").textContent = `${b}/` + "10";
    e.stopPropagation();
  });
});

document
  .querySelector(".back-btn-pageResults")
  .addEventListener("click", () => {
    document.querySelector(".results-page").style.display = "none";
    paintersPage.style.display = "block";
  });

function displayQuestions() {
  let displayQuestion = "";
  displayQuestion += `
      <div class="question-block">
        <div class="overlay"></div>
        <div class="modal-to-close">
            <img src="./assets/svg/close-modal.svg" class="modal-to-close__btn">
            <p>Вы действительно хотите выйти из игры?</p>
            <button class="cancel">Отмена</button>
            <button class="yes">Да</button>
        </div>
        <div class="progress-time">
            <img src="./assets/svg/back-pageCategory.svg" class="back-btn">
            <div>
                <img src="./assets/svg/timer-picture.svg" class="timer-picture">
                <span></span>
            </div>
        </div>
        <p class="question">Кто автор этой картины?</p>
        <img class="question-image">
        <div class="answers-painters">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
        <div class="footer">
            <ul class="footer-list">
                <li><a href="https://rs.school/js/"><img src="./assets/svg/rs-school-logo.svg"></a></li>
                <li><a href="https://github.com/Anastasiya220394">Anastasiya Nitievskaya</a></li>
                <li>2021</li>
            </ul>
        </div>
        <div class="modal-question">
            <img class="trueAnswer">
            <img class="question-image2">
            <p class="picture-modal"></p>
            <span class="author-modal"></span>
            <span class="year-modal"></span>
            <button class="continue-question">Продолжить</button>
        </div>
        <div class="results-painters">
            <img src="./assets/svg/close-modal.svg" class="modal-results-close__btn">
            <img class="modal-results-cup">
            <p class="congr"></p>
            <p class="score-results"></p>
            <button class="results-painters__btnHome"></button>
            <button class="results-painters__btnNext"></button>
        </div>
      </div>
      
      `;
  document.querySelector(".quiz-block").innerHTML = displayQuestion;
}

document
  .querySelector(".btn-settings-categories")
  .addEventListener("click", () => {
    paintersPage.style.display = "none";
    settingsPage.style.display = "block";
  });
document.querySelector(".logo-cat").addEventListener("click", () => {
  paintersPage.style.display = "none";
  mainPage.style.display = "block";
});

categories.forEach((cat) => {
  const img = cat.querySelector("img");
  img.addEventListener("click", (e) => {
    getData(e.target.parentNode);
  });
});

function updateScore() {
  categories.forEach((cat) => {
    const catScore = localStorage.getItem(cat.className);
    const divScore = cat.querySelector(".score");
    const divScoreBtn = cat.querySelector(".page-score");
    const img = cat.querySelector(".categories-img");
    if (catScore) {
      divScore.textContent = `${catScore.split(",").length}/${10}`;
      divScoreBtn.style.display = "block";
      img.classList.add("gray");
    }
    if (catScore === "") {
      divScore.textContent = `${0}/${10}`;
      divScoreBtn.style.display = "block";
      img.classList.add("gray");
    }
  });
}
updateScore();

export default checkboxTime;
