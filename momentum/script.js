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
        quotes: 'data.json',
        placeholder: '[Enter name]',
        ms: 'm/s',
        defaultCity: 'Minsk',
        locale: "en-US",
        arr: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
        weather: ['Wind speed ', 'Humidity ']
    },
    'ru': {
        quotes: 'data-ru.json',
        placeholder: '[Введите имя]',
        ms: 'м/с',
        defaultCity: 'Минск',
        locale: "ru",
        arr: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
        weather: ['Скорость ветра ', 'Влажность ']
    }
  }


function getLang() {
    let tmp = localStorage.getItem('lang');
    if (tmp === 'en') {
        return greetingText.en;
    }
    return greetingText.ru;
}
function initLang() {
    if(!localStorage.getItem("lang")) {
        localStorage.setItem("lang", 'en');
    }
}
initLang();

function update(e) {
    localStorage.setItem("lang", e.target.textContent);
    showGreeting();
    getWeather();
    getQuotes();
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
   let globalDay = new Date().getDay();
   let globalHours = new Date().getHours();
   let lang = getLang();
    if (globalHours >= 6 && globalHours < 12) {
        greeting.textContent = lang.arr[0];
   } else if (globalDay > 0 && globalDay < 6 && globalHours >= 12 && globalHours < 18) {
        greeting.textContent = lang.arr[1];
   } else if(globalDay > 0 && globalDay < 6 && globalHours >= 18 && globalHours < 24) {
        greeting.textContent = lang.arr[2];
   } else {
        greeting.textContent = lang.arr[3];
   }
   let place = getLang().placeholder;
   name.setAttribute("placeholder",place );
   return globalHours;
}

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    if (weatherError.textContent == '') {
        localStorage.setItem('city', city.value);
    } else if (weatherError.textContent = 'Error! Enter the correct name of the city.') {
        localStorage.setItem('city', '');
    }
   
  }
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
      }
}
window.addEventListener('load', getLocalStorage);




document.querySelector('.lang').addEventListener('click', update)
document.querySelector('.lang2').addEventListener('click', update)















function getRandomNum() {
    let min = Math.ceil(1);
    let max = Math.floor(20);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTimeOfDay() {
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
   return timeOfDay;
}


getRandomNum();

function setBg() {
    let timeOfDay = getTimeOfDay();
    let bgNum = randomNum.toString().padStart(2, "0");
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/Anastasiya220394/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`; 
    img.onload = () => {      
        body.style.backgroundImage = `url(${img.src})`;
    }; 
}

setBg();

function getSlideNext() {
    if(randomNum <= 19) {
        setBg(randomNum++)
    } else if(randomNum = 20) {
        setBg(randomNum = 1);
    }
}
slideNext.addEventListener('click', getSlideNext)

function getSlidePrev() {
    if (randomNum > 1) {
        setBg(randomNum--)
    } else if(randomNum == 1) {
        setBg(randomNum = 20);
    }
}
slidePrev.addEventListener('click', getSlidePrev)


document.addEventListener("DOMContentLoaded", () => {
    let defaultCity = getLang().defaultCity;
    if(localStorage.length == 0) {
        city.value = defaultCity;
        getWeather();
    }
    console.log(defaultCity)
    if(localStorage.getItem('city') == '') {
        city.value = defaultCity;
        getWeather();
    } else if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        getWeather();
    }
});


async function getWeather() { 
    weatherError.textContent = '';
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
        weatherError.textContent = 'Error! Enter the correct name of the city.';
    } 
    if (city.value == Number) {
        return weatherIcon.className = '',
        temperature.textContent = '',
        humidity.textContent = '',
        wind.textContent = '',
        weatherDescription.textContent = '',
        weatherError.textContent = 'Error! Enter the correct name of the city.';
    }

    return weatherIcon.className = 'weather-icon owf',
    weatherIcon.classList.add(`owf-${data.weather[0].id}`),
    temperature.textContent = `${Math.round(data.main.temp)}°C`,
    weatherDescription.textContent = data.weather[0].description,
    wind.textContent = `${weatherWind}` + `${Math.round(data.wind.speed)} ${ms}`,
    humidity.textContent = `${weatherHum}` + `${Math.round(data.main.humidity)}%`,
    weatherError.textContent = '';
}
city.addEventListener('change', getWeather)


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

