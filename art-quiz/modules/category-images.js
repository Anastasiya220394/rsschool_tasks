import {imagesPage, mainPage, settingsPage} from './main-page.js';
import {trueAnswer, falseAnswer, gameOver} from './settings-page.js';
import {checkboxTime} from './category-painters.js';

const btnHome = document.querySelector('.btn-home-images');

btnHome.addEventListener('click', () => {
    imagesPage.style.display = 'none';
    mainPage.style.display = 'block';
})


let score = 0;
let currentPos = 0;




const categories = document.querySelectorAll("[class^='category-images-']")
categories.forEach(cat => {  cat.addEventListener('click', function(e) {
    if (e.target !== e.currentTarget) {
      getData(e.target.parentNode);
      return;
    }
    getData(e.target);
    }); 
  });


async function getData(e) {
    const res = await fetch('./data/images.json');
    const data = await res.json();
    let cutArr = [];
    cutArr = data.slice(120,240)
    
    let arrToShow = [];

    if (e.className == 'category-images-realism') {
        arrToShow = cutArr.slice(0,10)
    }
    if (e.className == 'category-images-impressionism') {
        arrToShow = cutArr.slice(10,20)
    }
    if (e.className == 'category-images-portrait') {
        arrToShow = cutArr.slice(20,30)
    }
    if (e.className == 'category-images-painting') {
        arrToShow = cutArr.slice(30,40)
    }
    if (e.className == 'category-images-landscape') {
        arrToShow = cutArr.slice(40,50)
    }
    if (e.className == 'category-images-avant-garde') {
        arrToShow = cutArr.slice(50,60)
    }
    if (e.className == 'category-images-surrealism') {
        arrToShow = cutArr.slice(60,70)
    }
    if (e.className == 'category-images-romanticism') {
        arrToShow = cutArr.slice(70,80)
    }
    if (e.className == 'category-images-expressionism') {
        arrToShow = cutArr.slice(80,90)
    }
    if (e.className == 'category-images-religion') {
        arrToShow = cutArr.slice(90,100)
    }
    if (e.className == 'category-images-marine') {
        arrToShow = cutArr.slice(100,110)
    }
    if (e.className == 'category-images-renaissance') {
        arrToShow = cutArr.slice(110,120)
    }

    console.log(arrToShow)


    imagesPage.style.display = 'none';
    document.querySelector('.quiz2-block').style.display = 'block';


    let authorReal = arrToShow[currentPos].author;
    let imageReal = arrToShow[currentPos].imageNum;
    let imageRealSrc = `/assets/images/mobile/${imageReal}.jpg`;
    let imageRandom = cutArr[Math.floor(Math.random() * cutArr.length)].imageNum;
    let imageRandomSrc = `/assets/images/mobile/${imageRandom}.jpg`;
    let imageRandom2 = cutArr[Math.floor(Math.random() * cutArr.length)].imageNum;
    let imageRandomSrc2 = `/assets/images/mobile/${imageRandom2}.jpg`;
    let imageRandom3 = cutArr[Math.floor(Math.random() * cutArr.length)].imageNum;
    let imageRandomSrc3 = `/assets/images/mobile/${imageRandom3}.jpg`;

    let arrImages = [imageReal, imageRandom, imageRandom2, imageRandom3]
    arrImages.forEach(image => {
        if (image === image) {
            image = cutArr[Math.floor(Math.random() * cutArr.length)].image;
        }
    })


    displayTasks()

    document.querySelector('.author-question').textContent = 'Какую картину написал' + ' ' + authorReal + '?';

    let answersImages = Array.from(document.querySelector('.images-block').children);
    var item = answersImages[Math.floor(Math.random()*answersImages.length)];
    item.src = imageRealSrc;
    var index = answersImages.indexOf(item);
    if (index > -1) {
        answersImages.splice(index, 1);
    }

    answersImages[0].src = imageRandomSrc;
    answersImages[1].src = imageRandomSrc2;
    answersImages[2].src = imageRandomSrc3;

    function getNext() {
        if(currentPos < 2) {
            currentPos = currentPos + 1;
            setTimeout(function(){
                getData(e)
            }, 1000);
        } else {
            currentPos = 0;
            document.querySelector('.results-images').classList.toggle('show');
            document.querySelector('.overlay2').style.display = 'block';
            document.querySelector('.modal-question2').classList.toggle('show');
            gameOver.play();
        }
        localStorage.setItem('score', score);
    }
    const answer = document.querySelector('.images-block');
    answer.addEventListener('click', (event) => {
        document.querySelector('.modal-question2').classList.toggle('show');
        if (String(event.target.src).includes(imageReal)) {
            score = score + 1;
            event.target.style.border = '5px solid green';
            trueAnswer.play();
            document.querySelector('.trueAnswer2').src = '../assets/svg/true.svg';
        } else {
            event.target.style.border = '5px solid red';
            falseAnswer.play();
            document.querySelector('.trueAnswer2').src = '../assets/svg/false.svg';
        }
    })


    document.querySelector('.question-image3').src = imageRealSrc;
    document.querySelector('.author-modal2').textContent = authorReal;
    document.querySelector('.picture-modal2').textContent = arrToShow[currentPos].name;
    document.querySelector('.year-modal2').textContent = arrToShow[currentPos].year;



    const btnContinue = document.querySelector('.continue-question2');
    btnContinue.addEventListener('click', getNext)

    /*document.querySelector('.back-btn').addEventListener('click', () => {
        document.querySelector('.quiz2-block').style.display = 'none';
        imagesPage.style.display = 'block';
    });*/


    document.querySelector('.back-btn2').addEventListener('click', () => {
        document.querySelector('.overlay2').style.display = 'block';
        document.querySelector('.modal-to-close2').classList.toggle('show');
    });
    document.querySelector('.modal-to-close__btn2').addEventListener('click', () => {
        document.querySelector('.overlay2').style.display = 'none';
        document.querySelector('.modal-to-close2').classList.toggle('show');
    });
    document.querySelector('.cancel2').addEventListener('click', () => {
        document.querySelector('.overlay2').style.display = 'none';
        document.querySelector('.modal-to-close2').classList.toggle('show');
    });
    document.querySelector('.yes2').addEventListener('click', () => {
        document.querySelector('.quiz2-block').style.display = 'none';
        imagesPage.style.display = 'block';
    });




    //document.querySelector('.category-results').textContent = arrToShow[currentPos].category;
    document.querySelector('.score-results2').textContent = score + '/' + '10';

    if (score <= 7) {
        document.querySelector('.modal-results-cup2').src = '../assets/svg/game-over-cup.svg';
        document.querySelector('.congr2').textContent = 'Сыграем еще?';
        document.querySelector('.score-results2').textContent = 'Game over' + ' ' + score + '/' + '10';
        document.querySelector('.results-painters__btnHome2').textContent = 'Отмена';
        document.querySelector('.results-painters__btnNext2').textContent = 'Да';
        
    } else {
        document.querySelector('.modal-results-cup2').src = '../assets/svg/champion-cup.svg';
        document.querySelector('.congr2').textContent = 'Поздравляем!';
        document.querySelector('.results-painters__btnHome2').textContent = 'Домой';
        document.querySelector('.results-painters__btnNext2').textContent = 'Следующая игра';
    }
    //модалка в конце
    
    document.querySelector('.modal-results-close__btn2').addEventListener('click', () => {
        document.querySelector('.results-images').classList.toggle('show');
        document.querySelector('.overlay2').style.display = 'none';
    });
    
    document.querySelector('.results-painters__btnHome2').addEventListener('click', () => {
        document.querySelector('.results-images').classList.toggle('show');
        document.querySelector('.quiz2-block').style.display = 'none';
        mainPage.style.display = 'block';
    });
    document.querySelector('.results-painters__btnNext2').addEventListener('click', () => {
        document.querySelector('.results-images').classList.toggle('show');
        document.querySelector('.question-block2').classList.toggle('show');
        imagesPage.style.display = 'block';
    });

    if(checkboxTime.checked) {
        document.querySelector('.timer-picture2').style.display = 'block';
        document.querySelector('.progress-time2 span').style.display = 'block';
        timer();
    }

    function timer() {
        let count = document.querySelector('#count_time').value;
        let interval = setInterval(function(){
            document.querySelector('.progress-time2 span').innerHTML='00' + ' ' + ':' + ' ' + count;
            count--;
            if (count === 0){
                clearInterval(interval);
                falseAnswer.play();
                getNext();
            }
            if(document.querySelector('.quiz2-block').style.display == 'none') {
                clearInterval(interval);
            }
            if(document.querySelector('.modal-question2').classList.contains('show')) {
                clearInterval(interval);
            }
        }, 1000);
    }

    
}


function displayTasks() {
    let displayTask = "";
    displayTask += `
      <div class="question-block2">
      <div class="overlay2"></div>
        <div class="modal-to-close2">
            <img src="../assets/svg/close-modal.svg" class="modal-to-close__btn2">
            <p>Вы действительно хотите выйти из игры?</p>
            <button class="cancel2">Отмена</button>
            <button class="yes2">Да</button>
        </div>
        <div class="progress-time2">
        <img src="../assets/svg/back-pageCategory.svg" class="back-btn2">
        <div>
            <img src="../assets/svg/timer-picture.svg" class="timer-picture2">
            <span></span>
        </div>
        </div>
        <p class="author-question"> ?</p>
        <div class="images-block">
            <img></img>
            <img></img>
            <img></img>
            <img></img>
        </div>
        <div class="footer">
            <ul class="footer-list">
                <li><a href="https://rs.school/js/"><img src="./assets/svg/rs-school-logo.svg"></a></li>
                <li><a href="https://github.com/Anastasiya220394">Anastasiya Nitievskaya</a></li>
                <li>2021</li>
            </ul>
        </div>
        <div class="modal-question2">
            <img class="trueAnswer2">
            <img class="question-image3">
            <p class="author-modal2">Автор</p>
            <p class="picture-modal2">Название картины</p>
            <p class="year-modal2">Год</p>
            <button class="continue-question2">Продолжить</button>
        </div>
        <div class="results-images">
            <img src="./assets/svg/close-modal.svg" class="modal-results-close__btn2">
            <img class="modal-results-cup2">
            <p class="congr2"></p>
            <p class="score-results2"></p>
            <button class="results-painters__btnHome2"></button>
            <button class="results-painters__btnNext2"></button>
        </div>
      </div>
      `;
    document.querySelector('.quiz2-block').innerHTML = displayTask;
}


document.querySelector('.btn-settings-categories2').addEventListener('click', () => {
    imagesPage.style.display = 'none';
    settingsPage.style.display = 'block';
});
document.querySelector('.logo-cat2').addEventListener('click', () => {
    imagesPage.style.display = 'none';
    mainPage.style.display = 'block';
});