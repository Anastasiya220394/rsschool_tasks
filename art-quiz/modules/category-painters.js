import {paintersPage, mainPage, settingsPage} from './main-page.js';
import {trueAnswer, falseAnswer, gameOver} from './settings-page.js';

const btnHome = document.querySelector('.btn-home-painters');

const checkboxTime = document.querySelector('#input-time');


btnHome.addEventListener('click', () => {
    paintersPage.style.display = 'none';
    mainPage.style.display = 'block';
})

let score = 0;
let currentPos = 0;
const categories = document.querySelectorAll("[class^='category-painters-']")

categories.forEach(cat => {
    let img = cat.querySelector('img')
    img.addEventListener('click', function(e) {
      getData(e.target.parentNode);
    }); 
}); 
  

async function getData(e) {
    const res = await fetch('./data/images.json');
    const data = await res.json();
    let categoryArray = [];

    if (e.className == 'category-painters-realism') {
        categoryArray = data.filter(item => item.category == 'realism')
    }
    if (e.className == 'category-painters-impressionism') {
        categoryArray = data.filter(item => item.category == 'impressionism')
    }
    if (e.className == 'category-painters-renaissance') {
        categoryArray = data.filter(item => item.category == 'renaissance')
    }
    if (e.className == 'category-painters-portrait') {
        categoryArray = data.filter(item => item.category == 'portrait')
    }
    if (e.className == 'category-painters-painting') {
        categoryArray = data.filter(item => item.category == 'painting')
    }
    if (e.className == 'category-painters-landscape') {
        categoryArray = data.filter(item => item.category == 'landscape')
    }
    if (e.className == 'category-painters-avantgarde') {
        categoryArray = data.filter(item => item.category == 'avant-garde')
    }
    if (e.className == 'category-painters-surrealism') {
        categoryArray = data.filter(item => item.category == 'surrealism')
    }
    if (e.className == 'category-painters-romanticism') {
        categoryArray = data.filter(item => item.category == 'romanticism')
    }
    if (e.className == 'category-painters-expressionism') {
        categoryArray = data.filter(item => item.category == 'expressionism')
    }
    if (e.className == 'category-painters-religion') {
        categoryArray = data.filter(item => item.category == 'religion')
    }
    if (e.className == 'category-painters-marine') {
        categoryArray = data.filter(item => item.category == 'marine')
    }

    let cutCategoryArray = categoryArray.slice(0,10)
    
    paintersPage.style.display = 'none';
    const quizBlock = document.querySelector('.quiz-block');
    quizBlock.style.display = 'block';

    let num = cutCategoryArray[currentPos].imageNum;
    let authorReal = cutCategoryArray[currentPos].author;
    let authorRandom = data[Math.floor(Math.random() * data.length)].author;
    let authorRandom2 = data[Math.floor(Math.random() * data.length)].author;
    let authorRandom3 = data[Math.floor(Math.random() * data.length)].author;


    let src = `/assets/images/full/${num}full.jpg`;
    let arrAuthors = [authorReal, authorRandom, authorRandom2, authorRandom3]
    arrAuthors.forEach(author => {
        if (author === author) {
            author = cutCategoryArray[Math.floor(Math.random() * cutCategoryArray.length)].author;
        }
    })

    displayQuestions();

    const questionImage2 = document.querySelector('.question-image2');
    const authorModal = document.querySelector('.author-modal');
    const pictureModal = document.querySelector('.picture-modal');
    const yearModal = document.querySelector('.year-modal');
    const questionImage = document.querySelector('.question-image');

    questionImage.src = src;

    const answers = Array.from(document.querySelector('.answers-painters').children);
    let item = answers[Math.floor(Math.random()*answers.length)];
    item.textContent = authorReal;
    let index = answers.indexOf(item);
    if (index > -1) {
        answers.splice(index, 1);
    }

    answers[0].textContent = authorRandom;
    answers[1].textContent = authorRandom2;
    answers[2].textContent = authorRandom3;
       
    questionImage2.src = src;
    authorModal.textContent = authorReal + ',' + ' ';
    pictureModal.textContent = cutCategoryArray[currentPos].name;
    yearModal.textContent = cutCategoryArray[currentPos].year + ' ' + 'г.';

    const resultRound = document.querySelector('.results-painters');
    const trueImg = document.querySelector('.trueAnswer');
    const overlay = document.querySelector('.overlay');
    const modalQuestion = document.querySelector('.modal-question');

    function getNext() {
        if(currentPos < 9) {
            currentPos = currentPos + 1;
            setTimeout(function(){
                getData(e)
            }, 1000);
            
        } else {
            currentPos = 0;
            resultRound.classList.toggle('show');
            overlay.style.display = 'block';
            modalQuestion.classList.toggle('show');
            gameOver.play();
        }
        localStorage.setItem('score', score);
    }
    const answer = document.querySelector('.answers-painters');
    answer.addEventListener('click', (event) => {
        modalQuestion.classList.toggle('show');
        overlay.style.display = 'block';
        if (event.target.textContent == authorReal) {
            score = score + 1;
            event.target.style.background = 'green';
            trueAnswer.play();
            trueImg.src = '../assets/svg/true.svg';
        } else {
            event.target.style.background = 'red';
            falseAnswer.play();
            trueImg.src = '../assets/svg/false.svg';
        }
    })
    const btnContinue = document.querySelector('.continue-question');
    btnContinue.addEventListener('click', getNext)

    //document.querySelector('.category-results').textContent = realismArr[currentPos].category;
    document.querySelector('.score-results').textContent = score + '/' + '10';


    const modalCloseGame = document.querySelector('.modal-to-close');
    
    document.querySelector('.back-btn').addEventListener('click', () => {
        overlay.style.display = 'block';
        modalCloseGame.classList.toggle('show');
    });
    document.querySelector('.modal-to-close__btn').addEventListener('click', () => {
        overlay.style.display = 'none';
        modalCloseGame.classList.toggle('show');
        modalQuestion.classList.toggle('show');
    });
    document.querySelector('.cancel').addEventListener('click', () => {
        overlay.style.display = 'none';
        modalCloseGame.classList.toggle('show');
    });
    document.querySelector('.yes').addEventListener('click', () => {
        quizBlock.style.display = 'none';
        paintersPage.style.display = 'block';
    });


    if (score <= 7) {
        document.querySelector('.modal-results-cup').src = '../assets/svg/game-over-cup.svg';
        document.querySelector('.congr').textContent = 'Сыграем еще?';
        document.querySelector('.score-results').textContent = 'Game over' + ' ' + score + '/' + '10';
        document.querySelector('.results-painters__btnHome').textContent = 'Отмена';
        document.querySelector('.results-painters__btnNext').textContent = 'Да';
        
    } else {
        document.querySelector('.modal-results-cup').src = '../assets/svg/champion-cup.svg';
        document.querySelector('.congr').textContent = 'Поздравляем!';
        document.querySelector('.results-painters__btnHome').textContent = 'Домой';
        document.querySelector('.results-painters__btnNext').textContent = 'Следующая игра';
    }

    

    //модалка в конце
    
    document.querySelector('.modal-results-close__btn').addEventListener('click', () => {
        resultRound.classList.toggle('show');
        overlay.style.display = 'none';
    });
    
    document.querySelector('.results-painters__btnHome').addEventListener('click', () => {
        resultRound.classList.toggle('show');
        quizBlock.style.display = 'none';
        mainPage.style.display = 'block';
    });
    document.querySelector('.results-painters__btnNext').addEventListener('click', () => {
        resultRound.classList.toggle('show');
        document.querySelector('.question-block').style.display = 'none';
        paintersPage.style.display = 'block';
    });

    if(checkboxTime.checked) {
        document.querySelector('.timer-picture').style.display = 'block';
        document.querySelector('.progress-time span').style.display = 'block';
        timer();
    }
    
    function timer() {
        let count = document.querySelector('#count_time').value;
        let interval = setInterval(function(){
            document.querySelector('.progress-time span').innerHTML='00' + ' ' + ':' + ' ' + count;
            count--;
            if (count === 0){
                clearInterval(interval);
                falseAnswer.play();
                getNext();
            }
            if(quizBlock.style.display == 'none') {
                clearInterval(interval);
            }
            if(modalQuestion.classList.contains('show')) {
                clearInterval(interval);
            }
        }, 1000);
    }
    
    
    function displayPictures() {
        cutCategoryArray.forEach((item, index) => {
            const img = document.createElement('img');
            img.classList.add('image-result');
            img.src = `/assets/images/mobile/${cutCategoryArray[index].imageNum}.jpg`;
            
            /*const allImg = document.getElementsByClassName('image-result');
            allImg.forEach(img => {
                let ololo = 
                `
                <div>
                    <span class="author-img"></span>
                    <span class="picture-img"></span>
                    <span class="year-img"></span>
                </div>
                `;
                ololo.append(img)
            })
            document.querySelector('.author-img').textContent = authorReal + ',' + ' ';
            document.querySelector('.picture-img').textContent = cutRealismArr[currentPos].name;
            document.querySelector('.year-img').textContent = cutRealismArr[currentPos].year + ' ' + 'г.';*/
    
            const listContainer = document.querySelector('.all-images');
            listContainer.append(img);
        })
    }  



    document.querySelector('.back-btn-pageResults').addEventListener('click', () => {
        document.querySelector('.results-page').style.display = 'none';
        paintersPage.style.display = 'block';
    })
    categories.forEach(cat => {
        let scoreBtn = cat.getElementsByTagName('button')[0];
        scoreBtn.addEventListener('click', function(e) {
            document.querySelector('.results-page').style.display = 'block';
            paintersPage.style.display = 'none';
            displayPictures()
            document.querySelector('.name-category').textContent = cutCategoryArray[currentPos].category;
            document.querySelector('.score-pageResults').textContent = localStorage.getItem('score') + '/' + '10';
            
          e.stopPropagation();
        })
    })
    
 //конец гетДаты   
}







function displayQuestions() {
    let displayQuestion = "";
    displayQuestion += `
      <div class="question-block">
        <div class="overlay"></div>
        <div class="modal-to-close">
            <img src="../assets/svg/close-modal.svg" class="modal-to-close__btn">
            <p>Вы действительно хотите выйти из игры?</p>
            <button class="cancel">Отмена</button>
            <button class="yes">Да</button>
        </div>
        <div class="progress-time">
            <img src="../assets/svg/back-pageCategory.svg" class="back-btn">
            <div>
                <img src="../assets/svg/timer-picture.svg" class="timer-picture">
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
    document.querySelector('.quiz-block').innerHTML = displayQuestion;
}







document.querySelector('.btn-settings-categories').addEventListener('click', () => {
    paintersPage.style.display = 'none';
    settingsPage.style.display = 'block';
});
document.querySelector('.logo-cat').addEventListener('click', () => {
    paintersPage.style.display = 'none';
    mainPage.style.display = 'block';
});

if(!localStorage.getItem('score')) {
    document.querySelector('.score').textContent = 0 + '/' + '10';
} else {
    document.querySelector('.score').textContent = localStorage.getItem('score') + '/' + '10';
}






export {checkboxTime}