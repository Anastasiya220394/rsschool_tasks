import './displayList.js';
import { playList } from './playList.js';

const time = document.querySelector('.time');
const date = document.querySelector('.date');
let greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
let randomNum;
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
let isPlay = false;

const greetingText = {
    'en': {
        weatherError: 'Error! Enter the correct name of the city.',
        quotes: 'data.json',
        placeholder: '[Enter name]',
        ms: 'm/s',
        defaultCity: 'Minsk',
        locale: "en-US",
        arr: ['Good morning, ', 'Good afternoon, ', 'Good evening, ', 'Good night, '],
        weather: ['Wind speed: ', 'Humidity: '],
        settings: 'Settings',
        show: 'HIDE',
        time: 'Time',
        date: 'Date',
        greeting: 'Greeting',
        settingQuotes: 'Quotes',
        settingWeather: 'Weather',
        audio: 'Audio',
        todo: 'Todo List',
        general: 'GENERAL',
        settingLang: 'Language',
        photoSource: 'Photo source',
        placeholderTags: 'Add tag to search a photo',
        btnTags: 'Show',
        notice: '(Only for Unsplash and Flickr)'
    },
    'ru': {
        weatherError: 'Ошибка! Введите правильное название города.',
        quotes: 'data-ru.json',
        placeholder: '[Введите имя]',
        ms: 'м/с',
        defaultCity: 'Минск',
        locale: "ru",
        arr: ['Доброе утро, ', 'Добрый день, ', 'Добрый вечер, ', 'Доброй ночи, '],
        weather: ['Скорость ветра: ', 'Влажность: '],
        settings: 'Настройки',
        show: 'СКРЫТЬ',
        time: 'Время',
        date: 'Дата',
        greeting: 'Приветствие',
        settingQuotes: 'Цитаты',
        settingWeather: 'Погода',
        audio: 'Аудио',
        todo: 'Список дел',
        general: 'ОБЩИЕ',
        settingLang: 'Язык',
        photoSource: 'Источник фото',
        placeholderTags: 'Введите тег для поиска фото',
        btnTags: 'Показать',
        notice: '(Только для Unsplash и Flickr)'
    }
}


function getRandomNum() {
    let min = Math.ceil(1);
    let max = Math.floor(20);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNum()

const imagesSrc = {
    git: {
        name: 'github',
        local: '.assets/img',
        src: `https://raw.githubusercontent.com/Anastasiya220394/stage1-tasks/assets/images`,
        build_src: function() {
            let timeOfDay = showGreeting();
                if (timeOfDay >= 6 && timeOfDay < 12) {
                    timeOfDay = 'morning';
                } else if (timeOfDay >= 12 && timeOfDay < 18) {
                    timeOfDay = 'afternoon';
                } else if(timeOfDay >= 18 && timeOfDay < 24) {
                    timeOfDay = 'evening';
                } else {
                    timeOfDay = 'night';
                }

            setBg(`${this.src}/${timeOfDay}/${randomNum.toString().padStart(2, "0")}.jpg`)
        }
    }, 
    unsplash: {
        name: 'unsplash',
        client_id: 'client_id=5o1TKD5GzWY_0dxDhlIB2DvhkigiXVWuG04rI_ruuIs',
        src: `https://api.unsplash.com/photos/random?orientation=landscape&query=`,
        build_src: async function(tags) {
            let timeOfDay = getTimeOfDay();
            let src = this.src + `${timeOfDay}&` + this.client_id;
            const res = await fetch(src);
            const data = await res.json();
            src = data.urls.regular; 
            setBg(src); 
        }
    },
    flickr: {
        name: 'flickr',
        key: 'api_key=6f7c5cdb6c032ec0b5c3e8ea3b3a26fb&tags=',
        scr: `https://www.flickr.com/services/rest/?method=flickr.photos.search&`,
        size: '&extras=url_l&format=json&nojsoncallback=1',
        build_src: async function(tags) {
            let timeOfDay = getTimeOfDay();
            let src = `https://www.flickr.com/services/rest/?method=flickr.photos.search&` + this.key + `${timeOfDay}` + this.size;
            const res = await fetch(src);
            const data = await res.json();
            data.photos.perpage = 1;
            let rand = data.photos.photo[Math.floor(Math.random() * data.photos.photo.length)];
            setBg(rand.url_l);
            data.photos.photo.splice(data.photos.photo.indexOf(rand), 1);
        }
    }
}

function getLang() {
    let tmp = localStorage.getItem('lang');
    if (tmp === 'en') {
        return greetingText.en;
    }
    return greetingText.ru; 
}

const githubBtn = document.querySelector('.github');
githubBtn.addEventListener('click', updateUrl);
const unsplashBtn = document.querySelector('.unsplash')
unsplashBtn.addEventListener('click', updateUrl);
const flickrBtn = document.querySelector('.flickr');
flickrBtn.addEventListener('click', updateUrl);


function updateUrl(e) {
    localStorage.setItem('url', e.target.className);
    getUrl();
    const buttonsArr = Array.from(document.querySelector('.source_btn').children);
    buttonsArr.forEach((el)=>el.classList.remove('active-btn'));
    e.target.classList.add('active-btn');
    if(e.target.className === 'github active-btn') {
        document.querySelector('.tags').disabled=true
        document.querySelector('.tags-add').disabled=true
    } else {
        document.querySelector('.tags').disabled=false
        document.querySelector('.tags-add').disabled=false
    }
}

function getUrl() {
    let source = localStorage.getItem('url');
    if(source === imagesSrc.git.name)
        imagesSrc.git.build_src();
    else if (source === imagesSrc.unsplash.name) {
        imagesSrc.unsplash.build_src();
    }
    else if (source === imagesSrc.flickr.name) {
        imagesSrc.flickr.build_src();
    }
} 

function initLang() {
    if(!localStorage.getItem("lang")) {
        localStorage.setItem("lang", 'en');
    }
    if(!localStorage.getItem("url")) {
        localStorage.setItem("url", 'github');
    }

    let source = localStorage.getItem('url');
    if(source === imagesSrc.git.name) githubBtn.click();
    if(source === imagesSrc.unsplash.name) unsplashBtn.click();
    if(source === imagesSrc.flickr.name) flickrBtn.click();
}
initLang();





function update(e) {
    localStorage.setItem("lang", e.target.textContent);
    showGreeting();
    getWeather();
    getQuotes();
    setLocalStorage();
    settingLang();
}

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}
showTime();

function showDate() {
    let lang = getLang().locale;
    const data = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = data.toLocaleDateString(lang, options);
    date.textContent = currentDate;
    setTimeout(showDate, 1000);
}

function showGreeting() {
   let globalHours = new Date().getHours();
   let lang = getLang();
    if (globalHours >= 6 && globalHours < 12) {
        greeting.textContent = lang.arr[0];
   } else if (globalHours >= 12 && globalHours < 18) {
        greeting.textContent = lang.arr[1];
   } else if(globalHours >= 18 && globalHours < 24) {
        greeting.textContent = lang.arr[2];
   } else {
        greeting.textContent = lang.arr[3];
   }
   let place = getLang().placeholder;
   name.setAttribute("placeholder", place);
   return globalHours;
}

function setLocalStorage() {
    let error = getLang().weatherError;
    localStorage.setItem('name', name.value);
    if (weatherError.textContent == '') {
        localStorage.setItem('city', city.value);
    } else if (weatherError.textContent = `${error}`) {
        localStorage.setItem('city', '');
    }
    let tags = document.querySelector('.tags');
    localStorage.setItem('tags', tags.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
    let tags = document.querySelector('.tags');
    if(localStorage.getItem('tags')) {
        tags.value = localStorage.getItem('tags');
        getTimeOfDay()
        getUrl()
      }
}
window.addEventListener('load', getLocalStorage);


document.querySelector('.lang').addEventListener('click', update);
document.querySelector('.lang2').addEventListener('click', update);


function getTimeOfDay() {
    let tags = document.querySelector('.tags');
    let timeOfDay = showGreeting();
    if (timeOfDay >= 6 && timeOfDay < 12 && tags.value == '') {
        timeOfDay = 'morning';
    } else if (timeOfDay >= 12 && timeOfDay < 18 && tags.value == '') {
        timeOfDay = 'afternoon';
   } else if(timeOfDay >= 18 && timeOfDay < 24 && tags.value == '') {
        timeOfDay = 'evening';
   } else {
        timeOfDay = 'night';
   } 
   if (tags.value !== '') {
       timeOfDay = tags.value;
   }
   return timeOfDay;
}
document.querySelector('.tags-add').addEventListener('click', getUrl)
document.querySelector('.tags').addEventListener('change', getUrl)
function setBg(src) {
    const img = new Image();
    img.src = src; 
    img.onload = () => {      
        body.style.backgroundImage = `url(${img.src})`;
    }; 
}


function getSlideNext() {
    if(randomNum <= 19) {
        randomNum++;
    } else if(randomNum = 20) {
        randomNum = 1;
    }
    getUrl();
} 

slideNext.addEventListener('click', getSlideNext)


function getSlidePrev() {
    if (randomNum > 1) {
        randomNum--;
    } else if(randomNum == 1) {
        randomNum = 20;
    }
    getUrl();
}
slidePrev.addEventListener('click', getSlidePrev);

let defaultCity = getLang().defaultCity;
city.value = defaultCity;
document.addEventListener("DOMContentLoaded", () => {
    let defaultCity = getLang().defaultCity;
    if(localStorage.length == 0) {
        city.value = defaultCity;
        getWeather();
    }
    if(localStorage.getItem('city') == '') {
        city.value = defaultCity;
        getWeather();
    } else if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        //city.value = defaultCity;
        getWeather();
    } 
});


async function getWeather() { 
    weatherError.textContent = '';
    let error = getLang().weatherError;
    let lang = getLang().locale;
    let ms = getLang().ms;
    let weatherWind = getLang().weather[0];
    let weatherHum = getLang().weather[1];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=713fb20ff410720fc82e786e1031fb72&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    if (data.cod >= 400 && data.cod < 600) {
        return weatherIcon.className = '',
        temperature.textContent = '',
        humidity.textContent = '',
        wind.textContent = '',
        weatherDescription.textContent = '',
        weatherError.textContent = `${error}`;
    } 
    if (city.value == Number) {
        return weatherIcon.className = '',
        temperature.textContent = '',
        humidity.textContent = '',
        wind.textContent = '',
        weatherDescription.textContent = '',
        weatherError.textContent = `${error}`;
    }

    return weatherIcon.className = 'weather-icon owf',
    weatherIcon.classList.add(`owf-${data.weather[0].id}`),
    temperature.textContent = `${Math.round(data.main.temp)}°C`,
    weatherDescription.textContent = data.weather[0].description,
    wind.textContent = `${weatherWind}` + `${Math.round(data.wind.speed)} ${ms}`,
    humidity.textContent = `${weatherHum}` + `${Math.round(data.main.humidity)}%`,
    weatherError.textContent = '';
}
city.addEventListener('change', getWeather);


async function getQuotes() {  
    let lang = getLang().quotes;
    const quotes = `${lang}`;
    const res = await fetch(quotes);
    const data = await res.json();
    let dataRandom = data[Math.floor(data.length * Math.random())]
    quote.textContent = dataRandom.text;
    author.textContent = dataRandom.author;
    let i = 1;
    function f1() {
        quote.textContent = data[i++].text;
        i = i % 21;
    }
    function f2() {
        author.textContent = data[i++].author;
        i = i % 21;
    }

    document.querySelector('.change-quote').addEventListener('click', () => {  
        f1();
        f2();
    })
}
getQuotes();



//player

const playBtn = document.querySelector('.play');
const nextBtn = document.querySelector('.play-next');
const prevBtn = document.querySelector('.play-prev');
const containerPlayList = document.querySelectorAll('.play-item');
const titleOfSong = document.querySelector('.title')
const progressDuration = document.querySelector('.progressDuration'),
duration = document.querySelector('.duration'),
songTime = document.querySelector('.song-time');
const progressVolume = document.querySelector('.progressVolume');
const volumeBtn = document.querySelector('.volume-icon');
const smallBtnPlay = document.querySelectorAll('.play-list button');

const audio = new Audio();
let playNum = 0,
  int = null,
  currentTime = 0,
  volumeValue = 0.3;

audio.src = playList[playNum].src;
audio.currentTime = 0;
audio.volume = volumeValue;


const playAudio = () => {
    audio.src = playList[playNum].src;
    audio.currentTime = currentTime;
    audio.play();
    isPlay = true;
    containerPlayList[playNum].classList.add('item-active');
    playBtn.classList.add('pause');
    smallBtnPlay[playNum].classList.add('pause');
    titleOfSong.textContent = playList[playNum].title;
    audio.addEventListener('ended', playNext);
    int = setInterval(updateProgressDuration, 1000);
  }
  
const pauseAudio = () => {
    audio.pause();
    currentTime = audio.currentTime;
    isPlay = false;
    containerPlayList.forEach(item => item.classList.remove('item-active'));
    playBtn.classList.remove('pause');
    smallBtnPlay.forEach(item => item.classList.remove('pause'));
    audio.removeEventListener('ended', playNext);
    clearInterval(int);
}
  
function playNext() {
    pauseAudio();
    currentTime = 0;
    playNum = playNum >= playList.length - 1 ? 0 : ++playNum;
    playAudio();
}

function playPrev() {
    pauseAudio();
    currentTime = 0;
    playNum = playNum <= 0 ? playList.length - 1 : --playNum;
    playAudio();
}

const handleProgressDuration = () => {
    audio.currentTime = progressDuration.value;
}

smallBtnPlay.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (playNum != i) {
        pauseAudio();
        currentTime = 0;
        playNum = i;
        playAudio();
        } else {
        if (!isPlay) {
            playAudio();
          } else {
            pauseAudio();
          }
        }
    })
})

const formatTime = (time) => {
    let minutes = Math.floor((time / 60));
    let seconds = Math.floor(time - (minutes * 60));
    if (seconds < 10) {
      seconds = `0${seconds}`;
    };
    return `${minutes}:${seconds}`;
};

function updateProgressDuration() {
    progressDuration.max = audio.duration;
    progressDuration.value = audio.currentTime;
    const progressValue = audio.currentTime / audio.duration * 100 + 0.5;
    progressDuration.style.background = `linear-gradient(to right, #4dc961ef 0%, #4dc961ef ${progressValue}%, #ffffffa8 ${progressValue}%, #ffffffa8 100%)`;
    songTime.innerHTML = formatTime(Math.floor(audio.currentTime));
    duration.innerHTML = formatTime(Math.floor(audio.duration));
}

progressVolume.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #4dc961ef 0%, #4dc961ef ${value}%, #ffffffa8 ${value}%, white 100%)`
  })

function audioChangeVolume() { //Меняем громкость
    var volume = progressVolume.value / 100;
    audio.volume = volume;
    if(audio.volume == 0) {
        volumeBtn.style.backgroundImage = "url('assets/svg/mute.svg')";
    } else {
        audio.volume != 0;
        volumeBtn.style.backgroundImage = "url('assets/svg/volume.svg')";
    }
}

function audioMute() { //Убираем звук
    if (audio.muted == false) {
        audio.muted = true;
        volumeBtn.style.backgroundImage = "url('assets/svg/mute.svg')";
    } else {
        audio.muted = false;
        volumeBtn.style.backgroundImage = "url('assets/svg/volume.svg')";
    }
}

volumeBtn.addEventListener('click', audioMute);
progressVolume.addEventListener('change', audioChangeVolume);

playBtn.addEventListener('click', () => {
    if (!isPlay) {
      playAudio();
    } else {
      pauseAudio();
    }
  });
nextBtn.addEventListener('click', () => {    
    playNext();    
});
prevBtn.addEventListener('click', () => {    
    playPrev();    
});
progressDuration.addEventListener('change', handleProgressDuration);



//settings
const openBtn = document.querySelector('.open-settings');
const modal = document.querySelector('.modal');

const toggleModal = () => {
    modal.classList.toggle('active-settings');
}
  
openBtn.addEventListener('click', e => {
    e.stopPropagation();
  
    toggleModal();
});
  
document.addEventListener('click', e => {
    let target = e.target;
    let its_modal = target == modal || modal.contains(target);
    let its_openBtn = target == openBtn;
    let modal_is_active = modal.classList.contains('active-settings');
    
    if (!its_modal && !its_openBtn && modal_is_active) {
        toggleModal();
    }
})


function settingLang() {
    let h2 = getLang().settings; 
    let firstH3 = getLang().show;
    document.querySelector('.modal h2').textContent = h2;
    document.querySelector('.show').textContent = firstH3;

    let time = getLang().time;
    document.querySelector('.setTime').textContent = time;

    let date = getLang().date;
    document.querySelector('.setDate').textContent = date;

    let greet = getLang().greeting;
    document.querySelector('.setGreet').textContent = greet;

    let quotes = getLang().settingQuotes;
    document.querySelector('.setQ').textContent = quotes;

    let weather = getLang().settingWeather;
    document.querySelector('.setWeather').textContent = weather;

    let setAudio = getLang().audio;
    document.querySelector('.setAudio').textContent = setAudio;

    let setTodo = getLang().todo;
    document.querySelector('.todo-list').textContent = setTodo;
    document.querySelector('.setTodo').textContent = setTodo;

    let general = getLang().general;
    document.querySelector('.general').textContent = general;

    let language = getLang().settingLang;
    document.querySelector('.setLang').textContent = language;

    let source = getLang().photoSource;
    document.querySelector('.source span').textContent = source;

    let inputTags = document.querySelector('.tags')
    let placeholderTags = getLang().placeholderTags;
    inputTags.setAttribute("placeholder", placeholderTags);

    let btnTags = getLang().btnTags;
    document.querySelector('.tags-add').textContent = btnTags;

    let notice = getLang().notice;
    document.querySelector('.notice-tags').textContent = notice;
}
settingLang();


function displayInSettings() {

    if(document.querySelector('#input-time').checked) {
        time.style.opacity = '0';
    } else {
        time.style.opacity = '1';
    }

    if(document.querySelector('#input-date').checked) {
        date.style.opacity = '0';
    } else {
        date.style.opacity = '1';
    }

    if(document.querySelector('#input-greet').checked) {
        document.querySelector('.greeting-container').style.opacity = '0';
        document.querySelector('.greeting-container').style.visibility = 'hidden';
    } else {
        document.querySelector('.greeting-container').style.opacity = '1';
        document.querySelector('.greeting-container').style.visibility = 'visible';
    }
        
    if(document.querySelector('#input-q').checked) {
        document.querySelector('.container-quote').style.opacity = '0';
    } else {
        document.querySelector('.container-quote').style.opacity = '1';
    }

    if(document.querySelector('#input-weather').checked) {
        document.querySelector('.weather').style.opacity = '0';
        document.querySelector('.weather').style.visibility = 'hidden';
    } else {
        document.querySelector('.weather').style.opacity = '1';
        document.querySelector('.weather').style.visibility = 'visible';
    }

    if(document.querySelector('#input-audio').checked) {
        document.querySelector('.player-cont').style.opacity = '0';
        document.querySelector('.play-list').style.opacity = '0';
        document.querySelector('.player-cont').style.visibility = 'hidden';
        document.querySelector('.play-list').style.visibility = 'hidden';
        
    } else {
        document.querySelector('.player-cont').style.opacity = '1';
        document.querySelector('.play-list').style.opacity = '1'
        document.querySelector('.player-cont').style.visibility = 'visible';
        document.querySelector('.play-list').style.visibility = 'visible';
    }

    if(document.querySelector('#input-todo').checked) {
        document.querySelector('.todo-list').style.opacity = '0';
        document.querySelector('.wrapper-todo').style.opacity = '0';
        document.querySelector('.wrapper-todo').style.visibility = 'hidden';
    } else {
        document.querySelector('.todo-list').style.opacity = '1';
        document.querySelector('.wrapper-todo').style.opacity = '1';
        document.querySelector('.wrapper-todo').style.visibility = 'visible';
    }

} 
document.querySelector('#input-time').addEventListener('change', displayInSettings);
document.querySelector('#input-date').addEventListener('change', displayInSettings);
document.querySelector('#input-greet').addEventListener('change', displayInSettings);
document.querySelector('#input-q').addEventListener('change', displayInSettings);
document.querySelector('#input-weather').addEventListener('change', displayInSettings);
document.querySelector('#input-audio').addEventListener('change', displayInSettings);
document.querySelector('#input-todo').addEventListener('change', displayInSettings);


let inputs = document.getElementsByName("setting");

inputs.forEach(el => {
    el.onchange = () => localStorage.setItem(el.id, el.checked);
    el.checked = localStorage.getItem(el.id) === "true";
    if(localStorage.getItem(el.id) === "true") {
        displayInSettings();
    }
});


//todo
const openTodo = document.querySelector('.todo-list');
function closeTodo() {
     document.querySelector('.wrapper-todo').style.display = document.querySelector('.wrapper-todo').style.display === "block" ?
     "none" : "block";
}
openTodo.addEventListener('click', closeTodo);